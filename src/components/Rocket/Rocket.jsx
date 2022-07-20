/* eslint-disable react/prop-types */
import './rocket.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../../redux/Rockets/Rockets';

export default function Rocket({ rocket }) {
  const dispatch = useDispatch();

  return (
    <li className="rocket-container" data-testid="rocket-item">

      <div
        className="image-container"
        style={
        { backgroundImage: `url(${rocket.img})` }
        }
      />

      <div className="rocket-info">
        <h3 className="rocket-name">{rocket.reserved ? `${rocket.name} (reserved)` : rocket.name}</h3>
        <p className="rocket-description">
          {rocket.description}
        </p>

        {!rocket.reserved && (
        <button
          type="button"
          className="reserve-button"
          onClick={() => {
            dispatch(toggleReservation(rocket.id));
          }}
        >
          RESERVE ROCKET
        </button>
        )}
        {rocket.reserved && (
        <button
          type="button"
          className="cancel-button"
          onClick={() => {
            dispatch(toggleReservation(rocket.id));
          }}
        >
          CANCEL RESERVATION
        </button>
        )}
      </div>

    </li>
  );
}
