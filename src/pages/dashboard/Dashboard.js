import React from 'react';
import styles from './Dashboard.module.css';

function DashBoard() {
  return (
    <>
      <main>
        <div className={styles.headline}>
          <h1>Classes</h1>
          <p>Please select a class</p>
          <span className={styles.seperator} />
        </div>
      </main>
    </>
  );
}

export default DashBoard;
