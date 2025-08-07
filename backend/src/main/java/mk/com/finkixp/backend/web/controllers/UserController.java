package mk.com.finkixp.backend.web.controllers;

import mk.com.finkixp.backend.dto.*;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.exception.InvalidArgumentsException;
import mk.com.finkixp.backend.model.exception.InvalidUserCredentialsException;
import mk.com.finkixp.backend.model.exception.PasswordsDoNotMatchException;
import mk.com.finkixp.backend.repository.UserRepository;
import mk.com.finkixp.backend.service.application.UserApplicationService;
import mk.com.finkixp.backend.service.domain.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserApplicationService userApplicationService;
    private final UserRepository userRepository;
    private final UserService userService;

    public UserController(UserApplicationService userApplicationService, UserRepository userRepository, UserService userService) {
        this.userApplicationService = userApplicationService;
        this.userRepository = userRepository;
        this.userService = userService;
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
    public ResponseEntity<DisplayUserDto> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(DisplayUserDto.from(user));
    }

    @GetMapping("/leaderboard")
    public ResponseEntity<List<UserLevelDto>> getLeaderboard() {
        return ResponseEntity.ok(userApplicationService.findTop10ByLevel());
    }

    @GetMapping("/api/users/{username}")
    public DisplayUserDto getUser(@PathVariable String username) {
        User user = userService.findByUsername(username);
        return DisplayUserDto.from(user);
    }


}
