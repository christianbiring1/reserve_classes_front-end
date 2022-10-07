import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddGroup from './components/redux/Groups/GroupReducer';
import DashBoard from './pages/Dashboard';
import PostGroup from './components/redux/Groups/PostGroup';
import GetGroups from './components/redux/Groups/GetGroups';
import Reservations from './components/Reservations';
import NewReservation from './components/Reservations/NewReservation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="groups/add" element={<AddGroup />} />
          <Route exact path="/add" element={<PostGroup />} />
          <Route exact path="/groups" element={<GetGroups />} />
          <Route exact path="/reservations" element={<Reservations />} />
          <Route exact path="/newreservation" element={<NewReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
