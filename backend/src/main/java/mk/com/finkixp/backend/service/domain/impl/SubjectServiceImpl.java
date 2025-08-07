package mk.com.finkixp.backend.service.domain.impl;

import lombok.AllArgsConstructor;
import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.repository.SubjectRepository;
import mk.com.finkixp.backend.service.domain.SubjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;

    public SubjectServiceImpl(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @Override
    public List<Subject> findAll() {
        return subjectRepository.findAll();
    }

    @Override
    public Optional<Subject> findById(Long id) {
        return subjectRepository.findById(id);
    }

    @Override
    public Subject save(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public void delete(Long id) {
        subjectRepository.deleteById(id);
    }

    @Override
    public Optional<Subject> update(Long id, Subject subject) {
        return subjectRepository.findById(id)
                .map((existingSubject) -> {
                    existingSubject.setName(subject.getName());
                    return subjectRepository.save(existingSubject);
                });
    }

    @Override
    public List<Subject> searchSubjects(String keyword) {
        return subjectRepository.findByNameContainingIgnoreCase(keyword);
    }

}
