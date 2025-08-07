package mk.com.finkixp.backend.model.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.com.finkixp.backend.model.enums.Difficulty;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 1000)
    private String description;

    private boolean completed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne
    private User user;

    private Integer xp;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    public Task(String name, String description, boolean completed, Subject subject,Difficulty difficulty) {

        this.name = name;
        this.description = description;
        this.completed = false;
        this.subject = subject;

        this.difficulty = difficulty;
        this.xp = calculateXpByDifficulty();

    }

    public Task(String name, String description, Subject subject,User user,Difficulty difficulty) {

        this.name = name;
        this.description = description;
        this.completed = false;
        this.subject = subject;
        this.user = user;

        this.difficulty = difficulty;
        this.xp = calculateXpByDifficulty();
    }



    public Task() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Difficulty getDifficulty() {
        return difficulty;
    }
    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }
    // Други полиња, како user, итн.


    public Integer getXp() {
        return xp;
    }

    public void setXp(Integer xp) {
        this.xp = xp;
    }

    private Integer calculateXpByDifficulty() {
        if (this.difficulty == null) return 0;

        return switch (this.difficulty) {
            case EASY -> 20;
            case MEDIUM -> 40;
            case HARD -> 60;
        };
    }

}
