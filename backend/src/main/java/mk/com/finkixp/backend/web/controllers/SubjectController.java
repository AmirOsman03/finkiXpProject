package mk.com.finkixp.backend.web.controllers;

import mk.com.finkixp.backend.dto.CreateSubjectDto;
import mk.com.finkixp.backend.dto.DisplaySubjectDto;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.service.application.SubjectApplicationService;
import mk.com.finkixp.backend.service.domain.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    private final SubjectApplicationService applicationService;
    private final UserService userService;

    public SubjectController(SubjectApplicationService applicationService, UserService userService) {
        this.applicationService = applicationService;
        this.userService = userService;
    }

    @GetMapping
    public List<DisplaySubjectDto> findAll() {
        return applicationService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplaySubjectDto> findById(@PathVariable Long id) {
        return applicationService.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<DisplaySubjectDto> add(
            @RequestBody CreateSubjectDto createSubjectDto,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        User user = userService.findByUsername(userDetails.getUsername());

        DisplaySubjectDto subject = applicationService.save(createSubjectDto, user);

        return ResponseEntity.ok(subject);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<DisplaySubjectDto> update(@PathVariable Long id, @RequestBody CreateSubjectDto createSubjectDto) {
        return applicationService.update(id, createSubjectDto).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (applicationService.findById(id).isPresent()) {
            applicationService.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

}
