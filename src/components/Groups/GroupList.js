import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { base, delGroup } from '../../redux/newGroupSlice';
import { fetchGroups } from '../../redux/groupSlice';

function GroupList(props) {
  const dispatch = useDispatch();
  const handleDelete = async (group) => {
    await dispatch(delGroup(group));
    dispatch(fetchGroups());
  };

  const { groupprop } = props;
  const {
    title, name, description, rating, image, id,
  } = groupprop;
  return (
    <li className="group_item">
      <p>{name}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <p>
        {' '}

        <img src={`${base}${image.url}`} alt="group" />

      </p>

      <div>
        <button
          type="button"
          onClick={() => handleDelete(id)}
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
          Edit Class

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
    rating: PropTypes.number.isRequired,
    image: PropTypes.string,
    id: PropTypes.string,

  }).isRequired,
};

export default GroupList;
