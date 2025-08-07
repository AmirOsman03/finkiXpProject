package mk.com.finkixp.backend.service.domain.impl;

import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Difficulty;
import mk.com.finkixp.backend.repository.TaskRepository;
import mk.com.finkixp.backend.repository.UserRepository;
import mk.com.finkixp.backend.service.domain.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskServiceImpl(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
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


    public void completeTask(Long id, String username) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        if (task.getUser() == null) {
            throw new RuntimeException("Task has no user assigned!");
        }

        if (!task.getUser().getUsername().equals(username)) {
            throw new RuntimeException("Not authorized");
        }

        if (task.isCompleted()) {
            throw new RuntimeException("Task is already completed");
        }

        task.setCompleted(true);
        taskRepository.save(task);

        User user = task.getUser();
        int currentXp = user.getXpPoints() == null ? 0 : user.getXpPoints();

        // Претпоставувам дека Task има метод getXp() што враќа поени за задачата
        int newXp = currentXp + (task.getXp() != null ? task.getXp() : 0);
        user.setXpPoints(newXp);

        userRepository.save(user);
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
