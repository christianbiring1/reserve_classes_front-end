import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Class.module.css';

export default function Class(props) {
  const {
    id, title, image, description,
  } = props;
  return (
    <div className={styles.class}>
      <Link to={`/class/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className={styles.classInfo}>
        <h5>{title}</h5>
        <span className={styles.seperator} />
        <p>{description}</p>
      </div>
      <div className={styles.socialIcons}>
        <a className="social_icon twitter" href="https://facebook.com/">
          <span />
        </a>
        <a className="social_icon facebook" href="https://twitter.com/">
          <span />
        </a>
        <a className="social_icon instagram" href="https://instagram.com/">
          <span />
        </a>
      </div>
    </div>
  );
}

Class.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
