package mk.com.finkixp.backend.service.application.impl;

import lombok.AllArgsConstructor;
import mk.com.finkixp.backend.dto.CreateUserDto;
import mk.com.finkixp.backend.dto.DisplayUserDto;
import mk.com.finkixp.backend.dto.LoginResponseDto;
import mk.com.finkixp.backend.dto.LoginUserDto;
import mk.com.finkixp.backend.helper.JwtHelper;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.repository.UserRepository;
import mk.com.finkixp.backend.service.application.UserApplicationService;
import mk.com.finkixp.backend.service.domain.UserService;
import mk.com.finkixp.backend.web.filter.JwtFilter;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserApplicationServiceImpl implements UserApplicationService {
    private final UserService userService;

    public UserApplicationServiceImpl(UserService userService, JwtHelper jwtHelper) {
        this.userService = userService;
        this.jwtHelper = jwtHelper;
    }

    private final JwtHelper jwtHelper;

    @Override
    public Optional<DisplayUserDto> register(CreateUserDto createUserDto) {

        User user = userService.register(
                createUserDto.username(),
                createUserDto.password(),
                createUserDto.repeatPassword(),
                createUserDto.name(),
                createUserDto.surname(),
                createUserDto.role()
        );
        return Optional.of(DisplayUserDto.from(user));


    }

    @Override
    public Optional<LoginResponseDto> login(LoginUserDto loginUserDto) {

        User user = userService.login(
                loginUserDto.username(),
                loginUserDto.password()
        );
        String token = jwtHelper.generateToken(user);

        return Optional.of(new LoginResponseDto(token));
    }

    @Override
    public Optional<DisplayUserDto> findByUsername(String username) {
        return Optional.of(DisplayUserDto.from(userService.findByUsername(username)));
    }
}
