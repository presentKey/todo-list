import Header from './Header';
import Main from './Main';
import styles from './TodoList.module.css';

function TodoList() {
  return (
    <div className={styles.todoList}>
      <section className={styles.todoListSection}>
        <Header />
        <Main />
      </section>
    </div>
  );
}

export default TodoList;
