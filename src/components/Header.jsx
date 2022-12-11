import React from 'react';
import styles from './Header.module.css';
import Darkmode from './Darkmode';
import StateButton from './StateButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <Darkmode />

      <div className="stateBtnGroup">
        <StateButton text="All" />
        <StateButton text="Active" />
        <StateButton text="Compledted" />
      </div>
    </header>
  );
}
