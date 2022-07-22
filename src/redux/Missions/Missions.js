import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://api.spacexdata.com/v3/missions';

const initialState = { missions: [], status: null };
const GET_MISSIONS = 'redux/Missions/Missions/GET_MISSIONS';

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
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
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reservedMissions: (state, action) => ({
      ...state,
      missions: {
        ...state.missions,
        [action.payload]: {
          ...state.missions[action.payload],
          reserved: !state.missions[action.payload].reserved,
        },
      },
    }),
  },
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

export const { reservedMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
