import React, { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [text, setText] = useState('');
  function setTodoText(e) {
    setText((prev) => (prev = e.target.value));
  }
  function saveTodo() {
    const TODO = 'TODO';
    const itemArr = [];

    if (text === '') {
      return;
    }

    localStorage.getItem(TODO) === null
      ? itemArr.push(text)
      : itemArr.push(...JSON.parse(localStorage.getItem(TODO)), text);

    localStorage.setItem(TODO, JSON.stringify(itemArr));
    setText((prev) => (prev = ''));
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.add_group}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Todo"
          value={text}
          onChange={setTodoText}
        />
        <button type="button" onClick={saveTodo}>
          Add
        </button>
      </div>
    </footer>
  );
}
