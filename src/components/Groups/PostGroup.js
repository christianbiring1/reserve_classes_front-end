/* eslint-disable consistent-return */
import { useDispatch } from 'react-redux';
import React, { useState, useReducer } from 'react';
import { putGroup } from '../../redux/newGroupSlice';

// import newGroupSlice, { newgroup } from '../../redux/newGroupSlice';
const form = {
  name: '',
  title: '',
  description: '',
  rating: 0,
  image: '',
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
  const dispatcher = useDispatch();

  const [formState, dispatch] = useReducer(reducer, form);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = (formState) => {
    if (!formState.image) {
      setErrorMessage('Please upload an image to the hotel');
      return false;
    }
    return true;
  };
  // const group = {
  //   title, name, description, rating
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!isFormValid(formState)) return;

    const formData = new FormData();
    console.log('regitration');

    formData.append('name', formState.name);
    formData.append('description', formState.description);
    formData.append('rating', formState.rating);
    formData.append('image', formState.image);
    formData.append('title', formState.title);

    console.log(formData);

    dispatcher(putGroup(formData));
    setIsFormSubmitted(false);
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
            name="image"
            onChange={(e) => dispatch({ type: 'image', payload: e.target.files[0] })}
          />
          {isFormSubmitted && (
          <div className="text-yellow-200 border p-2 rounded bg-red-800 w-3/4 text-center">
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
