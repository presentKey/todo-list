import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.add_group}>
        <input type="text" name="" id="" placeholder="Add Todo" />
        <button type="button">Add</button>
      </div>
    </footer>
  );
}
