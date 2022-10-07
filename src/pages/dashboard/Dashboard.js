import React from 'react';
import styles from './Dashboard.module.css';
import Class from '../../components/class_card/Class';

function DashBoard() {
  return (
    <>
      <main>
        <div className={styles.headline}>
          <h1>Classes</h1>
          <h6>Please select a class</h6>
          <span className={styles.seperator} />
        </div>
        <div className={styles.classList}>
          <Class />
        </div>
      </main>
    </>
  );
}

export default DashBoard;
