package mk.com.finkixp.backend.repository;

import mk.com.finkixp.backend.model.domain.Task;
import mk.com.finkixp.backend.model.enums.Difficulty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByDifficulty(Difficulty difficulty);

}