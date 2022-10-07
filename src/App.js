import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DashBoard from './components/Dashboard';
import Reservations from './components/Reservations';
import NewReservation from './components/Reservations/NewReservation';
import PostGroup from './components/Groups/PostGroup';
import GetGroups from './components/Groups/GetGroups';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/reservations" element={<Reservations />} />
          <Route exact path="/newreservation" element={<NewReservation />} />
          <Route exact path="/add" element={<PostGroup />} />
          <Route exact path="/groups" element={<GetGroups />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
