package mk.com.finkixp.backend.service.application.impl;

import mk.com.finkixp.backend.dto.CreateTaskDto;
import mk.com.finkixp.backend.dto.DisplayTaskDto;
import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Difficulty;
import mk.com.finkixp.backend.service.application.TaskApplicationService;
import mk.com.finkixp.backend.service.domain.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TaskApplicationServiceImpl implements TaskApplicationService {

    private final TaskService taskService;


    public TaskApplicationServiceImpl(TaskService taskService) {
        this.taskService = taskService;

    }

    @Override
    public List<DisplayTaskDto> findAllTasks() {
        return DisplayTaskDto.fromTasks(taskService.findAll());
    }

    @Override
    public Optional<DisplayTaskDto> findTaskById(Long id) {
        return taskService.findById(id).map(DisplayTaskDto::fromUser);
    }

    @Override
    public Optional<DisplayTaskDto> update(Long id, CreateTaskDto createTaskDto) {
        return taskService.findById(id).map(
                ((existingTask) -> {
                    existingTask.setName(createTaskDto.name());
                    existingTask.setDescription(createTaskDto.description());
                    Task task = taskService.save(existingTask);
                    return DisplayTaskDto.fromUser(task);
                })
        );
    }

    @Override
    public void delete(Long id) {
        taskService.deleteById(id);
    }

    @Override
    public DisplayTaskDto createTask(CreateTaskDto createTaskDto, Subject subject, User user) {
        // Validate inputs
        if (createTaskDto == null || subject == null || user == null) {
            throw new IllegalArgumentException("CreateTaskDto, Subject, and User must not be null");
        }

        // Convert DTO to entity
        Task task = createTaskDto.toTask(user, subject);

        // Save the task
        Task savedTask = taskService.save(task);

        // Convert to display DTO and return
        return DisplayTaskDto.fromUser(savedTask);
    }

    @Override
    public List<DisplayTaskDto> findByDifficulty(Difficulty difficulty) {
        return DisplayTaskDto.fromTasks(this.taskService.findByDifficulty(difficulty));
    }

    @Override
    public List<DisplayTaskDto> findAllOrderByDifficultyAsc() {
        return this.taskService.findAllOrderByDifficultyAsc().stream().map(DisplayTaskDto::fromUser).collect(Collectors.toList());
    }

    @Override
    public List<DisplayTaskDto> findAllOrderByDifficultyDesc() {
        return this.taskService.findAllOrderByDifficultyDesc().stream().map(DisplayTaskDto::fromUser).collect(Collectors.toList());
    }


}
