package mk.com.finkixp.backend.service.application;


import mk.com.finkixp.backend.dto.*;

import java.util.List;
import java.util.Optional;

public interface UserApplicationService {

    Optional<DisplayUserDto> register(CreateUserDto createUserDto);

    Optional<LoginResponseDto> login(LoginUserDto loginUserDto);

    Optional<DisplayUserDto> findByUsername(String username);

    List<UserLevelDto> findTop10ByLevel();


}
