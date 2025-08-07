package mk.com.finkixp.backend.service.domain;

import mk.com.finkixp.backend.model.domain.Subject;

import java.util.List;
import java.util.Optional;

public interface SubjectService {
    List<Subject> findAll();

    Optional<Subject> findById(Long id);

    Subject save(Subject subject);

    void delete(Long id);

    Optional<Subject> update(Long id,Subject subject);

    List<Subject> searchSubjects(String keyword);
}
