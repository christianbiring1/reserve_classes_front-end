import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchGroups } from '../../redux/groupSlice';
import GroupList from './GroupList';

function GetGroups() {
  const dispatch = useDispatch();

  const groups = useSelector((state) => state.groups.groupList);
  console.log(groups)
  useEffect(() => {
    dispatch(fetchGroups())
  }, [])

  return (

    <>

      <h4>GetGroups</h4>
      <ul>

        {groups.length && groups.length > 0 ? groups.map((group) => (
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