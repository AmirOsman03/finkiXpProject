package mk.com.finkixp.backend.dto;

import mk.com.finkixp.backend.model.domain.Subject;

public record CreateSubjectDto(
        String name
) {
    public Subject toSubject() {
        return new Subject(name);
    }
}
