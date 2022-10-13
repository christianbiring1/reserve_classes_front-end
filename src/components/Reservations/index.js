import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReservations } from '../../redux/reservations/reservations';

const Reservation = () => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <section className="m-5 center">
      <h2 className="mb-5">My reservations</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
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
                <td>{item.date}</td>
                <td>{item.city}</td>
                <td><Link to="delete" className="link-danger">Delete</Link></td>
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
