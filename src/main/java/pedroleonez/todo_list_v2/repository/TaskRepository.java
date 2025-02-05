package pedroleonez.todo_list_v2.repository;

import pedroleonez.todo_list_v2.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
