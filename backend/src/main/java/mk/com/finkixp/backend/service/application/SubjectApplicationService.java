package mk.com.finkixp.backend.service.application;

import mk.com.finkixp.backend.dto.CreateSubjectDto;
import mk.com.finkixp.backend.dto.DisplaySubjectDto;
import mk.com.finkixp.backend.model.domain.User;

import java.util.List;
import java.util.Optional;

public interface SubjectApplicationService {
    List<DisplaySubjectDto> findAll();

    Optional<DisplaySubjectDto> findById(Long id);

    Optional<DisplaySubjectDto> update(Long id, CreateSubjectDto createSubjectDto);

    void deleteById(Long id);

    DisplaySubjectDto save(CreateSubjectDto createSubjectDto, User user);
}
