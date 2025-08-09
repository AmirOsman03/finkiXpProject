package mk.com.finkixp.backend.model.exception;

public class PasswordsDoNotMatchException extends RuntimeException {
    public PasswordsDoNotMatchException(String message) {
        super("Passwords do not match: " + message);
    }
}
