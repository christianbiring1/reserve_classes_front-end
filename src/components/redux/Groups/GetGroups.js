import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import GroupList from './GroupList';
import { fetchGroups } from '../../../redux/groupSlice';

function GetGroups() {
  const dispatch = useDispatch();

  const groups = useSelector((state) => state.groups.groupList);
  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return (

    <>

      <h4>GetGroups</h4>
      <ul>

        {groups.length && groups.length > 0 ? groups.map((group) => (
          <GroupList
            groupprop={group}
            key={group.id}
          />

        )) : 'Please wait...collecting data'}

      </ul>

    </>
  );
}

export default GetGroups;
