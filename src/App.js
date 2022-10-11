import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Splash from './components/Splash';
import AddGroup from './components/redux/Groups/GroupReducer';
import DashBoard from './pages/dashboard/Dashboard';
import PostGroup from './components/redux/Groups/PostGroup';
import Reservations from './components/Reservations';
import NewReservation from './components/Reservations/NewReservation';
import { sessionIsLoggedIn } from './redux/authentication/authentication';
import Registration from './pages/auth/Registartion';
import Details from './pages/details/Details';
// import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const isLoggedIn = session.logged_in;

  useEffect(() => {
    dispatch(sessionIsLoggedIn());
  }, [dispatch]);

  return (
    <>
      {session.status && (
        <h6 className="flash_notice">{session.status}</h6>
      )}
      {isLoggedIn && (
        // <Navbar />
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="groups/add" element={<AddGroup />} />
          <Route exact path="/add" element={<PostGroup />} />
          <Route exact path="/reservations" element={<Reservations />} />
          <Route exact path="/newreservation" element={<NewReservation />} />
          <Route exact path="/class/:id" element={<Details />} />
        </Routes>
      )}
      {!isLoggedIn && (
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="*" element={<Splash flash />} />
      </Routes>
      )}
    </>
  );
}

export default App;
