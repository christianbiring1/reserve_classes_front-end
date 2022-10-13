/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import ReservationForm from '../forms/ReservationForm';
import { newreservation } from '../../redux/newReservationSlice';
import './reservation.css';
import imgsvg from './undrow.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewReservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = (formData) => {
    const { date, user_id, group_id, city } = formData;
    dispatch(newreservation({ date, user_id, group_id, city }));
    navigate("/reservations")
    toast('Class reserved successfull', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
