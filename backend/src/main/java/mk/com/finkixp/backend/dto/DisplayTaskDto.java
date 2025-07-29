package mk.com.finkixp.backend.dto;

import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.domain.User;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayTaskDto(
        Long id,
        String name,
        String description,
        Boolean completed,
        String subject,
        String username

) {
    public static DisplayTaskDto fromUser(Task task) {
        return new DisplayTaskDto(
                task.getId(),
                task.getName(),
                task.getDescription(),
                task.isCompleted(),
                task.getSubject().getName(),
                task.getUser().getUsername()
        );
    }

    public static List<DisplayTaskDto> fromUsers(List<Task> tasks) {
        return tasks.stream().map(DisplayTaskDto::fromUser).collect(Collectors.toList());
    }

    public static Task toTask(Task task) {
        return new Task(task.getName(), task.getDescription(), task.isCompleted(), task.getSubject());
    }
}
