package mk.com.finkixp.backend.service.application.impl;

import mk.com.finkixp.backend.dto.CreateSubjectDto;
import mk.com.finkixp.backend.dto.DisplaySubjectDto;
import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.service.application.SubjectApplicationService;
import mk.com.finkixp.backend.service.domain.SubjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectApplicationServiceImpl implements SubjectApplicationService {

    private final SubjectService subjectService;

    public SubjectApplicationServiceImpl(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @Override
    public List<DisplaySubjectDto> findAll() {
        return DisplaySubjectDto.from(subjectService.findAll());
    }


    @Override
    public Optional<DisplaySubjectDto> findById(Long id) {
        return subjectService.findById(id).map(DisplaySubjectDto::from);
    }

    public Optional<DisplaySubjectDto> update(Long id, CreateSubjectDto createSubjectDto) {
        return subjectService.findById(id)  // само id
                .map(existingSubject -> {
                    // го менуваме постоечкиот објект со вредностите од DTO
                    existingSubject.setName(createSubjectDto.name());
                    // го зачувуваме изменетиот објект
                    Subject updated = subjectService.save(existingSubject);
                    return DisplaySubjectDto.from(updated);
                });
    }

    @Override
    public void deleteById(Long id) {
        subjectService.delete(id);
    }

    @Override
    public DisplaySubjectDto save(CreateSubjectDto createSubjectDto, User user) {
        return DisplaySubjectDto.from(subjectService.save(createSubjectDto.toSubject()));
    }

    @Override
    public List<DisplaySubjectDto> searchSubjects(String keyword) {
        return DisplaySubjectDto.from(subjectService.searchSubjects(keyword));
    }

}
