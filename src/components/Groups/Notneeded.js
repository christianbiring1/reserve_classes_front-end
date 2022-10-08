/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { newgroup } from '../../redux/newGroupSlice';
// import newGroupSlice, { newgroup } from '../../redux/newGroupSlice';
function PostGroup() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);

  // const group = {
  //   title, name, description, rating
  // }

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    console.log(formData);

    dispatch(newgroup(formData));
    setTitle('');
    setRating('');
    setDescription('');
    setName('');
    setImage(e.target.value = null);
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <h1>ADD NEW GROUP</h1>
        <div className="form">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            name="decription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="rating"
          />
          <input type="file" name="image" accept="image/*" multiple={false} onChange={onImageChange} onClick={(e) => (e.target.value = 'sex')} />
          <div className="submitButton">
            <button type="submit">ADD GROUP</button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default PostGroup;
