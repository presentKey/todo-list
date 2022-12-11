import Header from './Header';
import styles from './TodoList.module.css';

function TodoList() {
  return (
    <div className={styles.todoList}>
      <section className={styles.todoListSection}>
        <Header />
      </section>
    </div>
  );
}

export default TodoList;
