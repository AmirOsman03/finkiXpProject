package mk.com.finkixp.backend.web.controllers;

import mk.com.finkixp.backend.dto.*;
import mk.com.finkixp.backend.model.exception.InvalidArgumentsException;
import mk.com.finkixp.backend.model.exception.InvalidUserCredentialsException;
import mk.com.finkixp.backend.model.exception.PasswordsDoNotMatchException;
import mk.com.finkixp.backend.repository.UserRepository;
import mk.com.finkixp.backend.service.application.UserApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserApplicationService userApplicationService;
    private final UserRepository userRepository;

    public UserController(UserApplicationService userApplicationService, UserRepository userRepository) {
        this.userApplicationService = userApplicationService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<DisplayUserDto> register(@RequestBody CreateUserDto createUserDto) {
        try {
            return userApplicationService.register(createUserDto)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        } catch (InvalidArgumentsException | PasswordsDoNotMatchException exception) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginUserDto loginUserDto) {
        try {
            return userApplicationService.login(loginUserDto)
                    .map(ResponseEntity::ok)
                    .orElseThrow(InvalidUserCredentialsException::new);
        } catch (InvalidUserCredentialsException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/me")
    public ResponseEntity<DisplayUserDto> getCurrentUser(Principal principal) {
        String username = principal.getName();
        Optional<DisplayUserDto> userOpt = userApplicationService.findByUsername(username);

        if (userOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        DisplayUserDto user = userOpt.get();
        return ResponseEntity.ok(user);
    }

    @GetMapping("/leaderboard")
    public ResponseEntity<List<UserLevelDto>> getLeaderboard() {
        return ResponseEntity.ok(userApplicationService.findTop10ByLevel());
    }

}
