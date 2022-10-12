import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReservation } from '../../redux/reserveSlice';
import Navbar from '../Navbar';

const Reservation = () => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => state.reserve.reservations);

  useEffect(() => {
    dispatch(fetchReservation());
  }, []);

  return (
    <section className="m-5">
      <div className="nav_panel">
        <Navbar />
      </div>
      <h2 className="mb-5">My reservations</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">End date Date</th>
            <th scope="col">Reservation Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {reserved.data && reserved.data.length > 0
            ? reserved.data.map((item) => (
              <tr key={item.id}>
                <th scope="row">1</th>
                <td>{item.date}</td>
                <td>{item.id}</td>
                <td><Link to="delete" className="link-danger">Delete</Link></td>
              </tr>
            ))
            : <li><h2>There list of reservation</h2></li>}
        </tbody>
      </table>
    </section>
  );
};

export default Reservation;
