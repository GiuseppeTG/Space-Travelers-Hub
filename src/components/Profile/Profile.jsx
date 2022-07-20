import React from 'react';
import './Profile.scss';
import { useSelector } from 'react-redux';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-container">

      <div className="rocket-reservations">
        <h2 className="reserved-list-title">ROCKETS RESERVAED</h2>
        <ul className="reserved-list">

          {reservedRockets.length === 0
            ? <li className="to-yellow">No Rockets Yet</li>
            : reservedRockets.map((reservedRocket) => (
              <li
                key={reservedRocket.id}
                className="reserved-element"
              >
                {reservedRocket.name}
              </li>
            ))}

        </ul>
      </div>

    </div>
  );
}
