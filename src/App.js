import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddGroup from './components/redux/Groups/AddGroup';
import DashBoard from './components/Dashboard';
import PostGroup from './components/redux/Groups/PostGroup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path ="groups/add" element={<AddGroup />} />
        <Route exact path ="/add" element={<PostGroup />} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
