import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState, useReducer } from 'react';
import { putGroup } from '../../../redux/newGroupSlice';

const groupForm = {
  name: '',
  title: '',
  description: '',
  rating: 0,
  image: '',
  user_id: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    case 'title':
      return {
        ...state,
        title: action.payload,
      };
    case 'description':
      return {
        ...state,
        description: action.payload,
      };
    case 'rating':
      return {
        ...state,
        rating: action.payload,
      };
    case 'image':
      return {
        ...state,
        image: action.payload,
      };
    default:
      throw new Error();
  }
};
function PostGroup() {
  const postToApi = useDispatch();
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(reducer, groupForm);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector((state) => state.persistedSession.session.user);

  const isFormValid = (formState) => {
    if (!formState.image) {
      setErrorMessage('Please upload an image to the hotel');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!isFormValid(formState)) return;
    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('description', formState.description);
    formData.append('rating', formState.rating);
    formData.append('image', formState.image);
    formData.append('title', formState.title);
    formData.append('user_id', user.id);

    postToApi(putGroup(formData));
    setTimeout(() => {
      navigate('/');
    }, 700);
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <h1>ADD NEW GROUP</h1>
        <div className="form">
          <input
            type="text"
            name="title"
            onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}
            placeholder="Title"
          />

          <input
            type="text"
            name="name"
            onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            name="decription"
            onChange={(e) => dispatch({ type: 'description', payload: e.target.value })}
            placeholder="description"
          />
          <input
            type="number"
            name="rating"
            onChange={(e) => dispatch({ type: 'rating', payload: e.target.value })}
            placeholder="rating"
          />
          <input
            type="file"
            accept="image/*"
            multiple={false}
            name="image"
            onChange={(e) => dispatch({ type: 'image', payload: e.target.files[0] })}
          />
          {isFormSubmitted && (
          <div>
            {errorMessage}
          </div>
          )}

          <div className="submitButton">
            <button type="submit">ADD GROUP</button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default PostGroup;
