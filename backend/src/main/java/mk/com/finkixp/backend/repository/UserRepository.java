package mk.com.finkixp.backend.repository;

import mk.com.finkixp.backend.dto.UserLevelDto;
import mk.com.finkixp.backend.model.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);

    org.springframework.security.core.userdetails.User findByName(String name);

    @Query("SELECT new mk.com.finkixp.backend.dto.UserLevelDto(u.username, u.level) " +
            "FROM User u ORDER BY u.level DESC limit 10")
    public List<UserLevelDto> findTop10ByLevel();

}
