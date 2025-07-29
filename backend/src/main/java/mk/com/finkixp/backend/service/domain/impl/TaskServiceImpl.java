package mk.com.finkixp.backend.service.domain.impl;

import lombok.AllArgsConstructor;
import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.repository.TaskRepository;
import mk.com.finkixp.backend.service.domain.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
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
}
