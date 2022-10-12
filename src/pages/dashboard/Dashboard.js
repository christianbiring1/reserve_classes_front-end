import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Dashboard.module.css';
import Class from '../../components/class_card/Class';
import { fetchClasses } from '../../redux/classes/classes';
import { loading, loaded } from '../../redux/loading/loading';
import ripple from '../../assets/loading_ripple.svg';

function DashBoard() {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.class.classes);
  const isLoading = useSelector((state) => state.loading);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(loading());
    dispatch(fetchClasses()).then(() => {
      dispatch(loaded());
    });
  }, []);

  const currentClasses = classes.slice(3 * count, 3 * count + 3);

  const nextPage = () => {
    if (currentClasses.length < 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const prevPage = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <main className={styles.mainSection}>
        { isLoading ? (<img className={styles.ripple} src={ripple} alt="" />) : (
          <>
            <button className={styles.nextButton} onClick={prevPage} type="button">&larr;</button>
            <div className={styles.main}>
              <div className={styles.headline}>
                <h1>Classes</h1>
                <h6>Please select a class</h6>
                <span className={styles.seperator} />
              </div>
              <div className={styles.classList}>
                {currentClasses.map((group) => (
                  <Class
                    key={group.id}
                    id={group.id}
                    title={group.title}
                    image={group.image}
                    description={group.description}
                  />
                ))}
              </div>
            </div>
            <button className={styles.prevButton} onClick={nextPage} type="button">&rarr;</button>
          </>
        )}
      </main>
    </>
  );
}

export default DashBoard;
