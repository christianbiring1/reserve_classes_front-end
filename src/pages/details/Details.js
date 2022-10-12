/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styles from './Details.module.css';
import { fetchDetails } from '../../redux/classes/classes';
import Navbar from '../../components/Navbar';
import { URL } from '../../redux/api/api_helper';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  const classDetails = useSelector((state) => state.class.details);

  return (
    <section className={styles.main}>
      {classDetails.id && (
        <>
          <div className="nav_panel">
            <Navbar />
          </div>
          <div className={styles.image}>
            <img src={`${URL}${classDetails?.image?.url}`} alt="" />

            <Link to="/" className={styles.backButton}>
              <span />
            </Link>
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              <h1>{classDetails.title}</h1>
              <p>{classDetails.description}</p>
            </div>
            <ul className={styles.infoList}>
              <li>
                <span>Rating: </span>
                <span>{classDetails.rating}</span>
              </li>
            </ul>
            <button type="button">Reserve</button>
          </div>
        </>
      )}

      {!classDetails.id && (
        <>
          <div className={styles.error}>
            <h1>Error 404</h1>
            <h3>Class not found!</h3>
            <p>
              Please select one from
              {' '}
              <Link to="/">the list</Link>
              .
            </p>
          </div>
        </>
      )}

    </section>
  );
}
