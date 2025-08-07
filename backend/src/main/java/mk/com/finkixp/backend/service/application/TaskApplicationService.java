package mk.com.finkixp.backend.service.application;

import mk.com.finkixp.backend.dto.CreateTaskDto;
import mk.com.finkixp.backend.dto.DisplayTaskDto;
import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Difficulty;

import java.util.List;
import java.util.Optional;

public interface TaskApplicationService {
    List<DisplayTaskDto> findAllTasks();

    Optional<DisplayTaskDto> findTaskById(Long id);

    Optional<DisplayTaskDto> update(Long id, CreateTaskDto createTaskDto);

    void delete(Long id);

    DisplayTaskDto createTask(CreateTaskDto createTaskDto, Subject subject, User user);

}
