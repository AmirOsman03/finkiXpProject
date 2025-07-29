package mk.com.finkixp.backend.repository;

import mk.com.finkixp.backend.model.domain.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
