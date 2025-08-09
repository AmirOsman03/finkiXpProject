package mk.com.finkixp.backend.repository;

import mk.com.finkixp.backend.model.domain.CompletedTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompletedTaskRepository extends JpaRepository<CompletedTask, Long> {
}
