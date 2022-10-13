import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './Details.module.css';
import { fetchDetails } from '../../redux/classes/classes';
import { loading, loaded } from '../../redux/loading/loading';
import ripple from '../../assets/loading_ripple.svg';
import { delGroup } from '../../redux/newGroupSlice';

export default function Details() {
  const navigate = useNavigate();
  const URL = 'http://localhost:3001';

  const dispatch = useDispatch();
  const { id } = useParams();
  const handleDelete = async (group) => {
    dispatch(delGroup(group));
    navigate('/');
  };

  useEffect(() => {
    dispatch(loading());
    dispatch(fetchDetails(id)).then(() => {
      dispatch(loaded());
    });
  }, []);

  const classDetails = useSelector((state) => state.class.details);
  const isLoading = useSelector((state) => state.loading);

  return (
    <section className={styles.main}>
      {(classDetails.id && !isLoading) && (
        <>
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
            <div className={styles.btns}>
              <button
                type="button"
                onClick={() => handleDelete(classDetails.id)}
              >
                {' '}
                Remove

              </button>
              <Link to="/newreservation" className={styles.reserve_btn} state={{ group_id: classDetails.id }}>Reserve</Link>
            </div>
          </div>
        </>
      )}

      {(!classDetails.id && !isLoading) && (
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

      {isLoading && (
        <img className={styles.ripple} src={ripple} alt="" />
      )}

    </section>
  );
}
