import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReservations, cancelReservation } from '../../redux/reservations/reservations';
import { fetchClasses } from '../../redux/classes/classes';

const Reservation = () => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => state.reservation.reservations);
  const classes = useSelector((state) => state.class.classes);
  useEffect(() => {
    dispatch(fetchClasses());
    dispatch(fetchReservations());
  }, []);

  return (
    <section className="m-5 center">
      <h2 className="mb-5">My reservations</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Class</th>
            <th scope="col">End date Date</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {reserved.data && reserved.data.length > 0
            ? reserved.data.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index}</th>
                <td>
                  <Link className="reserved_class" to={`/class/${item.group_id}`}>
                    {classes.filter((each) => each.id === item.group_id)[0].title}
                  </Link>

                </td>
                <td>{item.date}</td>
                <td>{item.city}</td>
                <td><button onClick={() => dispatch(cancelReservation(item.id))} type="button" className="link-danger cancel-button">Cancel</button></td>
              </tr>
            ))
            : (
              <tr>
                <td>No Reservations</td>
              </tr>
            )}
        </tbody>
      </table>
    </section>
  );
};

export default Reservation;
