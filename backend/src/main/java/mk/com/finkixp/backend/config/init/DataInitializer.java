package mk.com.finkixp.backend.config.init;

import mk.com.finkixp.backend.model.domain.User;
import mk.com.finkixp.backend.model.enums.Role;
import mk.com.finkixp.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

//    @PostConstruct
    public void init() {
        User admin = new User(
                "admin",
                passwordEncoder.encode("admin"),
                "Admin",
                "Admin",
                Role.ROLE_ADMIN
        );
        userRepository.save(admin);

        User john = new User(
                "john",
                passwordEncoder.encode("john"),
                "John",
                "Test",
                Role.ROLE_MECHANIC
        );
        userRepository.save(john);

        User user = new User(
                "user",
                passwordEncoder.encode("user"),
                "User",
                "User",
                Role.ROLE_USER
        );
        userRepository.save(user);
    }

}