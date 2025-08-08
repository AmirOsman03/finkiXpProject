package mk.com.finkixp.backend.dto;

import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Role;

public record CreateUserDto(
        String username,
        String password,
        String repeatPassword,
        String name,
        String surname,
        Role role
) {
    public User toUser() {
        return new User(username,password,repeatPassword,name,surname,role);
    }
}
