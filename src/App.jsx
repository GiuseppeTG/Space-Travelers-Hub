import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar.jsx/Navbar';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/my-profile" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
