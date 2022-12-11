import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styles from './TodoList.module.css';

function TodoList() {
  return (
    <div className={styles.todoList}>
      <section className={styles.todoListSection}>
        <Header />
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default TodoList;
