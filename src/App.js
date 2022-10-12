import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Splash from './components/Splash';
import DashBoard from './pages/dashboard/Dashboard';
import PostGroup from './components/redux/Groups/PostGroup';
import Reservation from './components/Reservations/index';
import NewReservation from './components/Reservations/NewReservation';
import { sessionIsLoggedIn } from './redux/authentication/authentication';
import Registration from './pages/auth/Registartion';
import GetGroups from './components/Groups/GetGroups';
import Details from './pages/details/Details';

function App() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const isLoggedIn = session.logged_in;

  useEffect(() => {
    dispatch(sessionIsLoggedIn());
  }, [dispatch]);

  return (
    <section className="main_container">
      {isLoggedIn && (
      <div>
        <h1>Navbar is going to be here</h1>
      </div>
      )}
      <div>
        {session.status && (
          <h6 className="flash_notice">{session.status}</h6>
        )}
        {isLoggedIn && (
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/add" element={<PostGroup />} />
            <Route exact path="/reservations" element={<Reservation />} />
            <Route exact path="/newreservation" element={<NewReservation />} />
            <Route exact path="/groups" element={<GetGroups />} />
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
      </div>
    </section>
  );
}

export default App;
