import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, toggleMission } from '../../redux/Missions/Missions';
import './MissionList.scss';

export default function MissionList() {
  const missions = useSelector((state) => state.missions);
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
              <h3 className="mission-status">{mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</h3>
            </div>
            <p className="mission-description">
              {mission.description}
            </p>
            <div className="join-button-container">
              {!mission.reserved && (
              <button
                type="button"
                className="reserve-button"
                onClick={() => {
                  dispatch(toggleMission(mission.id));
                }}
              >
                JOIN MISSION
              </button>
              )}
              {mission.reserved && (
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  dispatch(toggleMission(mission.id));
                }}
              >
                LEAVE MISSION
              </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
