/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import ReservationForm from '../forms/ReservationForm';
import { newreservation } from '../../redux/newReservationSlice';
import Navbar from '../Navbar';

const NewReservation = () => {
  const dispatch = useDispatch();
  const handleForm = (formData) => {
    const { date, user_id, group_id } = formData;
    dispatch(newreservation({ date, user_id, group_id }));
  };
  return (
    <div>
      <div className="nav_panel">
        <Navbar />
      </div>
      <ReservationForm handleForm={handleForm} />
    </div>
  );
};

export default NewReservation;
