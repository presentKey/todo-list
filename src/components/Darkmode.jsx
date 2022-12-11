import React from 'react';
import styles from './Darkmode.module.css';
import { HiSun } from 'react-icons/hi';

export default function Darkmode() {
  return (
    <button className={styles.darkmode}>
      <HiSun />
    </button>
  );
}
