package mk.com.finkixp.backend.web.controllers;

import mk.com.finkixp.backend.dto.CreateSubjectDto;
import mk.com.finkixp.backend.dto.CreateTaskDto;
import mk.com.finkixp.backend.dto.DisplaySubjectDto;
import mk.com.finkixp.backend.dto.DisplayTaskDto;
import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.repository.UserRepository;
import mk.com.finkixp.backend.service.application.TaskApplicationService;
import mk.com.finkixp.backend.service.domain.SubjectService;
import mk.com.finkixp.backend.service.domain.TaskService;
import mk.com.finkixp.backend.service.domain.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipal;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskApplicationService taskApplicationService;
    private final SubjectService subjectService;
    private final UserService userService;
    private final UserRepository userRepository;

    public TaskController(TaskApplicationService taskApplicationService, SubjectService subjectService, UserService userService, UserRepository userRepository) {
        this.taskApplicationService = taskApplicationService;
        this.subjectService = subjectService;
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<DisplayTaskDto> getTasks() {
        return taskApplicationService.findAllTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayTaskDto> findById(@PathVariable Long id) {
        return taskApplicationService.findTaskById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<DisplayTaskDto> update(@PathVariable Long id, @RequestBody CreateTaskDto createTaskDto) {
        return taskApplicationService.update(id, createTaskDto).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (taskApplicationService.findTaskById(id).isPresent()) {
            taskApplicationService.delete(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<DisplayTaskDto> addTask(
            @RequestBody CreateTaskDto createTaskDto,
           @AuthenticationPrincipal UserDetails userDetails) {

        User user = userService.findByUsername(userDetails.getUsername());

        Subject subject = subjectService.findById(createTaskDto.subject().id())
                .orElseThrow(() -> new RuntimeException("Subject not found"));

        DisplayTaskDto createdTask = taskApplicationService.createTask(createTaskDto, subject, user);

        return ResponseEntity.ok(createdTask);
    }
}
