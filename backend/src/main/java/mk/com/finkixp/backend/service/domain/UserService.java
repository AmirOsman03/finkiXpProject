package mk.com.finkixp.backend.service.domain;
import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Role;
import mk.com.finkixp.backend.model.exception.InvalidArgumentsException;
import mk.com.finkixp.backend.model.exception.InvalidUserCredentialsException;
import mk.com.finkixp.backend.model.exception.PasswordsDoNotMatchException;
import mk.com.finkixp.backend.model.exception.UsernameAlreadyExistsException;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    User register(String username, String password, String repeatPassword, String name, String surname, Role role) throws PasswordsDoNotMatchException, UsernameAlreadyExistsException;

    User login(String username, String password) throws InvalidArgumentsException, InvalidUserCredentialsException;

    User findByUsername(String username);

}
