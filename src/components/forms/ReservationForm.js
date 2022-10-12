/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';

const ReservationForm = (props) => {
  const options = [
    { value: 'Kigali', label: 'Kigali' },
    { value: 'Kinshasa', label: 'Kinshasa' },
    { value: 'Paris', label: 'Paris' },
  ];
  const location = useLocation();
  const { group_id } = location.state;

  const [newDate, setNewDate] = useState({
    date: '',
    city: '',
    user_id: 1,
    group_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleForm(newDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__items">
        <div className="form__items__control">
          <Select
            options={options}
            className="select"
            placeholder="Select City ..."
            onChange={(e) => setNewDate({
              ...newDate,
              city: e.value,
            })}
          />
        </div>
        <div className="form__items__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={newDate.date}
            min="2020-01-01"
            max="2023-01-01"
            onChange={(e) => setNewDate({
              ...newDate,
              date: e.target.value,
            })}
          />
        </div>
      </div>
      <button type="submit" className="rserve__btn">Submit</button>
    </form>
  );
};

export default ReservationForm;
