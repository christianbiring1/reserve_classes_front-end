import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getgroups } from './GroupReducer'

function GetGroups() {
    const dispatch = useDispatch();

const groups = useSelector((state)=>state.groups);
useEffect(()=>{
    dispatch(getgroups())
},[dispatch])


  return (
    <div>GetGroups</div>
  )
}

export default GetGroups