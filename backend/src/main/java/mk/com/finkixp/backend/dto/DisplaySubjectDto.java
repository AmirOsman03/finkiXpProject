package mk.com.finkixp.backend.dto;

import mk.com.finkixp.backend.model.domain.Subject;

import java.util.List;
import java.util.stream.Collectors;

public record DisplaySubjectDto(
        Long id,
        String name,
        List<DisplayTaskDto> tasks
) {

    public static DisplaySubjectDto from(Subject subject) {
        return new DisplaySubjectDto(subject.getId(), subject.getName(), DisplayTaskDto.fromTasks(subject.getTasks()));
    }

    public static List<DisplaySubjectDto> from(List<Subject> subjectList) {
        return subjectList.stream().map(DisplaySubjectDto::from).collect(Collectors.toList());
    }

    public Subject toSubject() {
        return new Subject(name);
    }
}
