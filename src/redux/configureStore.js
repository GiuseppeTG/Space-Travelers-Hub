import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';

import missionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});
export default store;
