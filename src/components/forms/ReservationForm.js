import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import "./reservation.css";

const ReservationForm = (props) => {
  const options = [
    { value: 'Kigali', label: 'Kigali' },
    { value: 'Kinshasa', label: 'Kinshasa' },
    { value: 'Paris', label: 'Paris' }
  ]
  const location = useLocation();
  const { group_id } = location.state

  const [newDate, setNewDate] = useState({
    date: '',
    city: '',
    user_id: 1,
    group_id: group_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleForm(newDate);
  };

  return (
    <section className="reservation__container">
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <Select options={options}
              onChange={(e) => setNewDate({
                ...newDate,
                city: e.value,
              })}
            />
          </div>
          <div className="new-expense__control">
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
        <div className="new-expense-actions">
          <button type="submit">Reserve</button>
        </div>
      </form>
    </section>
  );
};

export default ReservationForm;

