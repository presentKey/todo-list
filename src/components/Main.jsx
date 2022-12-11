import React from 'react';
import styles from './Main.module.css';
import { MdDeleteForever } from 'react-icons/md';

export default function Main() {
  return (
    <main className={styles.main}>
      <ul className={styles.todo_list}>
        <li className={styles.todo_item}>
          <div className={styles.item_left}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id="check1"
            />
            <label htmlFor="check1" className={styles.content}>
              공부하기
            </label>
          </div>
          <div className={styles.item_right}>
            <MdDeleteForever />
          </div>
        </li>
        <li className={styles.todo_item}>
          <div className={styles.item_left}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id="check2"
            />
            <label htmlFor="check2" className={styles.content}>
              강의보기
            </label>
          </div>
          <div className={styles.item_right}>
            <MdDeleteForever />
          </div>
        </li>
      </ul>
    </main>
  );
}
