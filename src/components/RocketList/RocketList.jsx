import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import './RocketList.scss';
import Rocket from '../Rocket/Rocket';
import { getRockets } from '../../redux/Rockets/Rockets';

export default function RocketList() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rocket-list-container" data-testid="rocket-list-test">
      <h2 className="list-title" data-aos="fade-right">ROCKETS</h2>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            img={rocket.img}
            reserved={rocket.reserved}
            id={rocket.id}
          />
        ))}
      </ul>
    </div>
  );
}
