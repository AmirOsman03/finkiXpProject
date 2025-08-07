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

    @Query(value = """
    SELECT * FROM tasks
    ORDER BY\s
        CASE difficulty
            WHEN 'EASY' THEN 1
            WHEN 'MEDIUM' THEN 2
            WHEN 'HARD' THEN 3
        END ASC
   \s""", nativeQuery = true)
    List<Task> findAllOrderByDifficultyAsc();

    @Query(value = """
    SELECT * FROM tasks
    ORDER BY\s
        CASE difficulty
            WHEN 'EASY' THEN 3
            WHEN 'MEDIUM' THEN 2
            WHEN 'HARD' THEN 1
        END ASC
   \s""", nativeQuery = true)
    List<Task> findAllOrderByDifficultyDesc();



}