import React from 'react';
import styles from './Details.module.css';
import image from '../../tmp_assets/boxing.jpg';

export default function Details() {
  return (
    <section className={styles.main}>
      <div className={styles.image}>
        <img src={image} alt="" />
        <div className={styles.backButton}>
          <span />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <h1>Title</h1>
          <p>here goes description</p>
        </div>
        <ul className={styles.infoList}>
          <li>Rating</li>
          <li>Location</li>
        </ul>
        <button type="button">Reserve</button>
      </div>
    </section>
  );
}
