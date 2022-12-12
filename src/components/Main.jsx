import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import { MdDeleteForever } from 'react-icons/md';

export default function Main() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const TODO = 'TODO';
    setItems((prev) => (prev = JSON.parse(localStorage.getItem(TODO))));
  }, []);

  return (
    <main className={styles.main}>
      <ul className={styles.todo_list}>
        {items !== null
          ? items.map((item, index) => {
              return (
                <li key={index} className={styles.todo_item}>
                  <div className={styles.item_left}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name=""
                      id="check1"
                    />
                    <label htmlFor="check1" className={styles.content}>
                      {item}
                    </label>
                  </div>
                  <div className={styles.item_right}>
                    <MdDeleteForever />
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </main>
  );
}
