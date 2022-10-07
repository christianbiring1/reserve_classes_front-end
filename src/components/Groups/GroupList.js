import React from 'react';
import PropTypes from 'prop-types';

function GroupList(props) {
  const { groupprop } = props;
  const {
    title, name, description, rating,
  } = groupprop;
  return (
    <li className="group_item">
      <p>{name}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <div>
        <button
          type="button"
        >
          {' '}
          Remove

        </button>
      </div>
      <div>
        <button
          type="button"
        >
          {' '}
          Edit

        </button>
      </div>

    </li>

  );
}

GroupList.propTypes = {};
GroupList.propTypes = {
  groupprop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default GroupList;
