import React from 'react';
import styles from './StateButton.module.css';

export default function StateButton({ text }) {
  return <button className={styles.stateBtn}>{text}</button>;
}
