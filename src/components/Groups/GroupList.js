import React from 'react';
import PropTypes from 'prop-types';

function GroupList(props) {
  const { groupprop } = props;
  const {
    title, name, description, rating, image,
  } = groupprop;
  console.log(image);
  return (
    <li className="group_item">
      <p>{name}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <p>
        {' '}
        <h6> here is the image</h6>
        {image}
      </p>

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
    image: PropTypes.string,

  }).isRequired,
};

export default GroupList;
