import React from 'react';
import './Profile.scss';
import { useSelector } from 'react-redux';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const a = [];
  const missionkeys = Object.keys(missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  if (missionkeys.length) {
    missionkeys.forEach((mission) => {
      if (missions[mission].reserved) {
        a.push({
          id: a.length + 1,
          name: missions[mission].name,
        });
      }
    });
  }
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

          {a.length === 0
            ? <li className="to-yellow">No Missions Yet</li>
            : a.map((mission) => (
              <li
                key={mission.id}
                className="reserved-element"
              >
                {mission.name}
              </li>
            ))}

        </ul>
      </div>

    </div>
  );
}
