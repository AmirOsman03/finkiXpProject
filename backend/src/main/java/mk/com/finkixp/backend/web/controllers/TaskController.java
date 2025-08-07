package mk.com.finkixp.backend.web.controllers;

import mk.com.finkixp.backend.dto.CreateTaskDto;
import mk.com.finkixp.backend.dto.DisplayTaskDto;
import mk.com.finkixp.backend.model.domain.Subject;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Difficulty;
import mk.com.finkixp.backend.model.enums.SortOrder;
import mk.com.finkixp.backend.service.application.TaskApplicationService;
import mk.com.finkixp.backend.service.domain.SubjectService;
import mk.com.finkixp.backend.service.domain.TaskService;
import mk.com.finkixp.backend.service.domain.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskApplicationService taskApplicationService;
    private final SubjectService subjectService;
    private final UserService userService;
    private final TaskService taskService;

    public TaskController(
            TaskApplicationService taskApplicationService,
            SubjectService subjectService,
            UserService userService, TaskService taskService
    ) {
        this.taskApplicationService = taskApplicationService;
        this.subjectService = subjectService;
        this.userService = userService;
        this.taskService = taskService;
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
    public ResponseEntity<DisplayTaskDto> update(
            @PathVariable Long id,
            @RequestBody CreateTaskDto createTaskDto
    ) {
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
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        User user = userService.findByUsername(userDetails.getUsername());
        Subject subject = subjectService.findById(createTaskDto.subjectId())
                .orElseThrow(() -> new RuntimeException("Subject not found"));
        DisplayTaskDto createdTask = taskApplicationService.createTask(createTaskDto, subject, user);
        return ResponseEntity.ok(createdTask);
    }

    @PostMapping("/{id}/complete")
    public ResponseEntity<String> completeTask(@PathVariable Long id, Principal principal) {
        taskService.completeTask(id, principal.getName());
        return ResponseEntity.ok("Task completed successfully.");
    }

    @GetMapping("/api/tasks/by-difficulty")
    public ResponseEntity<List<DisplayTaskDto>> getTasksByDifficulty(@RequestParam Difficulty difficulty) {
        return ResponseEntity.ok(this.taskApplicationService.findByDifficulty(difficulty));
    }


    @GetMapping("/sorted")
    public ResponseEntity<List<DisplayTaskDto>> getTasksSortedByDifficulty(@RequestParam SortOrder sort) {
        List<DisplayTaskDto> tasks;

        switch (sort) {
            case EASY_FIRST -> tasks = taskApplicationService.findAllOrderByDifficultyAsc();
            case HARD_FIRST -> tasks = taskApplicationService.findAllOrderByDifficultyDesc();
            default -> tasks = taskApplicationService.findAllTasks();
        }

        return ResponseEntity.ok(tasks);
    }


}

