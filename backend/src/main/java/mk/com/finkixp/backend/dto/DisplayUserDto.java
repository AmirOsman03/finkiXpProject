package mk.com.finkixp.backend.dto;

import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Role;

public record DisplayUserDto (
        String username,
        String name,
        String surname,
        Role role,
        Integer level,
        Integer xpPoints
){

    public static DisplayUserDto from(User user){
        return new DisplayUserDto(user.getUsername(), user.getName(), user.getSurname(), user.getRole(),user.getLevel(),user.getXpPoints());
    }

    public User toUser(){
        return new User(username,name,surname,role.name());
    }
}
