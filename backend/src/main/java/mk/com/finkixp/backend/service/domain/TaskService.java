package mk.com.finkixp.backend.service.domain;

import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.enums.Difficulty;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAll();

    Optional<Task> findById(Long id);

    Task save(Task task);

    void deleteById(Long id);

    Optional<Task> update(Long id, Task task);


    void completeTask(Long id, String username);

}
