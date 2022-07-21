import './rocket.scss';
import PropTypes from 'prop-types';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../../redux/Rockets/Rockets';
import 'aos/dist/aos.css';

export default function Rocket({
  id, name, description, img, reserved,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <li className="rocket-container" data-testid="rocket-item" data-aos="fade-up">

      <div
        className="image-container"
        style={
        { backgroundImage: `url(${img})` }
        }
      />

      <div className="rocket-info">
        <h3 className="rocket-name">{reserved ? `${name} (reserved)` : name}</h3>
        <p className="rocket-description">
          {description}
        </p>

        {!reserved && (
        <button
          type="button"
          className="reserve-button"
          onClick={() => {
            dispatch(toggleReservation(id));
          }}
        >
          RESERVE ROCKET
        </button>
        )}
        {reserved && (
        <button
          type="button"
          className="cancel-button"
          onClick={() => {
            dispatch(toggleReservation(id));
          }}
        >
          CANCEL RESERVATION
        </button>
        )}
      </div>

    </li>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
  img: '',
};
