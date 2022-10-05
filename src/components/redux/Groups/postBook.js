import React, {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { addgroup } from './AddGroup';
function PostGroup(){
    
    const [title,setTitle] = useState('');
    const [name,setName] = useState('');
    const [decription,setDescription] = useState('');
    const [rating,setRating] = useState('');
    const group = {
        title,name,decription,rating
    }

const dispatch =useDispatch();
const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(addgroup(group));
    setTitle('');
    setRating('');
    setDescription('');
    setName('');
    setTimeout(() => {
        window.location.reload();
      }
      , 1000);

}














}