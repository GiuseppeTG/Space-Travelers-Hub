import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://api.spacexdata.com/v3/missions';

const initialState = { missions: [], status: null };
const GET_MISSIONS = 'redux/Rockets/Rockets/GET_MISSIONS';
const RESERVE_MISSIONS = 'redux/Rockets/Rockets/RESERVE_MISSIONS';

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    const result = await fetch(API);
    const data = await result.json();
    const missions = [];
    data.forEach((mission) => {
      const nextMission = {
        name: mission.mission_name,
        id: mission.mission_id,
        description: mission.description,
        reserved: false,
      };
      missions.push(nextMission);
    });
    return missions;
  },
);
getMissions();

export const reservedMissions = (id) => ({
  type: RESERVE_MISSIONS,
  payload: id,
});

const missions = createSlice({
  name: 'mission',
  initialState,
  extraReducers: {
    [getMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
    }),
  },
});

export default missions.reducer;
