import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/Missions';
import rocketsReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
