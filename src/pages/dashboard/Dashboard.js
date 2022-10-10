import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Dashboard.module.css';
import Class from '../../components/class_card/Class';
import { fetchClasses } from '../../redux/classes/classes';

function DashBoard() {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.class.classes);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <>
      <main>
        <div className={styles.headline}>
          <h1>Classes</h1>
          <h6>Please select a class</h6>
          <span className={styles.seperator} />
        </div>
        <div className={styles.classList}>
          {classes.map((group) => (
            <Class
              key={group.id}
              id={group.id}
              title={group.title}
              image={group.image}
              description={group.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default DashBoard;
