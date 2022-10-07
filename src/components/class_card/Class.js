import React from 'react';
import styles from './Class.module.css';
import image from '../../tmp_assets/boxing.jpg';

export default function Class() {
  return (
    <div className={styles.class}>
      <img src={image} alt="" />
      <div className={styles.classInfo}>
        <h5>BOXING</h5>
        <span className={styles.seperator} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}
