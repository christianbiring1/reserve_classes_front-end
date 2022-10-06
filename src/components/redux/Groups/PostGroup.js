import React, {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addgroup } from './GroupReducer';
function PostGroup(){
    
    const [title,setTitle] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [rating,setRating] = useState('');
    const group = {
        title,name,description,rating
    }

const dispatch =useDispatch();
const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(addgroup(group));
    setTitle('');
    setRating('');
    setDescription('');
    setName('');
  

}
const groups = useSelector((state) =>state.groups);
useEffect(()=> {
  dispatch(addgroup(group))
  console.log(groups)
},[dispatch])




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
          type="text"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="rating"
        />
        <div className="submitButton">
          <button type="submit">ADD GROUP</button>
        </div>
      </div>
    </form>

  </div>
);
}

export default PostGroup;









