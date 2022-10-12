/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import ReservationForm from '../forms/ReservationForm';
import { newreservation } from '../../redux/newReservationSlice';
import './reservation.css';
import imgsvg from './undrow.svg';

const NewReservation = () => {
  const dispatch = useDispatch();
  const handleForm = (formData) => {
    const { date, user_id, group_id } = formData;
    dispatch(newreservation({ date, user_id, group_id }));
  };
  return (
    <section className="reservations">
      <div className="reservation__container">
        <div className="grid__item">
          <img src={imgsvg} alt="reserve" />
        </div>
        <div className="grid__item" id="division">
          <ReservationForm handleForm={handleForm} />
        </div>
      </div>
    </section>
  );
};

export default NewReservation;
