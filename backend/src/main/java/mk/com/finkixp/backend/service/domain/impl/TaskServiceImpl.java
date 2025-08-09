package mk.com.finkixp.backend.service.domain.impl;

import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.domain.CompletedTask;
import mk.com.finkixp.backend.model.enums.Difficulty;
import mk.com.finkixp.backend.repository.TaskRepository;
import mk.com.finkixp.backend.repository.UserRepository;
import mk.com.finkixp.backend.repository.CompletedTaskRepository;
import mk.com.finkixp.backend.service.domain.TaskService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final CompletedTaskRepository completedTaskRepository;

    public TaskServiceImpl(TaskRepository taskRepository, UserRepository userRepository, CompletedTaskRepository completedTaskRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.completedTaskRepository = completedTaskRepository;
    }

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Task save(Task task) {

        return taskRepository.save(task);
    }

    @Override
    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }

    @Override
    public Optional<Task> update(Long id, Task task) {
        return taskRepository.findById(id).map((existingTask) ->
        {
            task.setSubject(existingTask.getSubject());
            task.setDescription(existingTask.getDescription());
            task.setCompleted(existingTask.isCompleted());
            return taskRepository.save(task);
        });
    }


    public Task completeTask(Long id, User user) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        if (task.getUser() == null) {
            throw new RuntimeException("Task has no user assigned!");
        }

        if (task.isCompleted()) {
            throw new RuntimeException("Task already completed");
        }

        CompletedTask completedTask = new CompletedTask();
        completedTask.setUser(user);
        completedTask.setTask(task);
        completedTask.setCompletedAt(LocalDateTime.now());
        completedTask.setXpAwarded(task.getXp());

        completedTaskRepository.save(completedTask);

        // Ажурирај XP и Level на корисникот
        int currentXp = Optional.ofNullable(user.getXpPoints()).orElse(0);
        int newXp = currentXp + task.getXp();

        user.setXpPoints(newXp);

        int xpThreshold = user.getLevel() * 100;
        if (newXp >= xpThreshold) {
            user.setLevel(user.getLevel() + 1);
            user.setXpPoints(newXp - xpThreshold);
        }

        userRepository.save(user);
        return task;
    }

    @Override
    public List<Task> findByDifficulty(Difficulty difficulty) {
        return this.taskRepository.findByDifficulty(difficulty);
    }

    @Override
    public List<Task> findAllOrderByDifficultyDesc() {
        return this.taskRepository.findAllOrderByDifficultyDesc();
    }

    @Override
    public List<Task> findAllOrderByDifficultyAsc() {
        return this.taskRepository.findAllOrderByDifficultyAsc();
    }


}
