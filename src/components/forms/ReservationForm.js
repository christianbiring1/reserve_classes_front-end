import { useState } from 'react';

const ReservationForm = (props) => {
  const [newDate, setNewDate] = useState({
    date: '',
    user_id: 1,
    group_id: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleForm(newDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
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
  );
};

export default ReservationForm;
