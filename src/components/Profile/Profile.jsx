import React from 'react';
import './Profile.scss';
import { useSelector } from 'react-redux';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  console.log(reservedMissions);
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

      <div className="active-missions">
        <h2 className="reserved-list-title">ACTIVE MISSIONS</h2>
        <ul className="reserved-list">

          {reservedMissions.length === 0
            ? <li className="to-yellow">No Missions Yet</li>
            : reservedMissions.map((reservedMission) => (

              <li
                key={reservedMission.id}
                className="reserved-element"
              >
                {reservedMission.name}
              </li>
            ))}

        </ul>
      </div>

    </div>
  );
}
