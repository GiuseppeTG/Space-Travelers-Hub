import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/Missions/Missions';
import './MissionList.scss';

function MissionsList() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <div className="missions-container">
      <h2 className="missions-title">MISSIONS</h2>
      <div className="missions-list">
        {missions.map((mission) => (
          <div key={mission.id} className="mission-container">
            <div className="mission-header">
              <h3 className="mission-name">{mission.name}</h3>
              <h3 className="mission-status">
                {mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
              </h3>
            </div>
            <p className="mission-description">{mission.description}</p>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default MissionsList;
