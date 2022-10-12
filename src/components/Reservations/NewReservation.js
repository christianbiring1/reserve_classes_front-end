/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import ReservationForm from '../forms/ReservationForm';
import { newreservation } from '../../redux/newReservationSlice';

const NewReservation = () => {
  const dispatch = useDispatch();
  const handleForm = (formData) => {
    const { date, user_id, group_id } = formData;
    dispatch(newreservation({ date, user_id, group_id }));
  };
  return (
    <div>
      <div></div>
      <div>
        <ReservationForm handleForm={handleForm} />
      </div>
    </div>
  );
};

export default NewReservation;
