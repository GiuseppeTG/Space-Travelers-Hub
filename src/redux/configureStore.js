import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';
import missionsSliceReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSliceReducer,
  },
});
export default store;
