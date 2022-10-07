import React from 'react';
import ReservationForm from '../forms/ReservationForm';

const NewReservation = () => {
  const handleForm = (formData) => {
    console.log(formData, 'you made it');
  };
  return (
    <div>
      <ReservationForm handleForm={handleForm} />
    </div>
  );
};

export default NewReservation;
