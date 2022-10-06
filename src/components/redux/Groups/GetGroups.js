import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import GroupList from './GroupList';
import { getgroups } from './GroupReducer'

function GetGroups() {
    const dispatch = useDispatch();

const groups = useSelector((state)=>state.groups);
useEffect(()=>{
    dispatch(getgroups())
},[])

console.log(groups)

  return (

    <>
    
    <h4>GetGroups</h4>
    <ul>

{groups.length>0 ? groups[0].map((group) => (
  <GroupList
    groupprop={group}
    key={group.id}
  />

)) : 'Please wait...'}

</ul>
    
    </>
  )
}

export default GetGroups 