import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/missions" element={<Missions />} />
          <Route exact path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
