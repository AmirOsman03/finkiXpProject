package mk.com.finkixp.backend.dto;

import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.domain.User;

import java.util.List;
import java.util.stream.Collectors;

public record CreateTaskDto(
        String name,
        String description,
        Long subjectId
) {
    public static CreateTaskDto createTaskDto(Task task) {
        return new CreateTaskDto(
                task.getName(),
                task.getDescription(),
                task.getSubject().getId()
        );
    }

    public static List<CreateTaskDto> createTaskDtoList(List<Task> tasks) {
        return tasks.stream().map(CreateTaskDto::createTaskDto).collect(Collectors.toList());
    }

    public Task toTask(User user, Subject subject) {
        return new Task(name, description, subject, user);
    }
}
