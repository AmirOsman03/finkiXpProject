package mk.com.finkixp.backend.service.application;


import mk.com.finkixp.backend.dto.CreateUserDto;
import mk.com.finkixp.backend.dto.DisplayUserDto;
import mk.com.finkixp.backend.dto.LoginResponseDto;
import mk.com.finkixp.backend.dto.LoginUserDto;

import java.util.Optional;

public interface UserApplicationService {

    Optional<DisplayUserDto> register(CreateUserDto createUserDto);

    Optional<LoginResponseDto> login(LoginUserDto loginUserDto);

    Optional<DisplayUserDto> findByUsername(String username);

}
