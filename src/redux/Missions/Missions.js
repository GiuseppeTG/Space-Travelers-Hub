const API = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'redux/Rockets/Rockets/GET_MISSIONS';
const RESERVE_MISSIONS = 'redux/Rockets/Rockets/RESERVE_MISSIONS';

export const getMissions = (GET_MISSIONS,
async () => {
  const result = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await result.json();
  const missions = [];
  return data.forEach((mission) => {
    const nextMission = {
      name: mission.mission_name,
      id: mission.mission_id,
      description: mission.description,
      reserved: false,
    };
    missions.push(nextMission);
  });
});

export const reservedMissions = (id) => ({
  type: RESERVE_MISSIONS,
  payload: id,
});

const missionsReducer = (action, state = []) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, action.payload];
    case RESERVE_MISSIONS:
      return state.filter((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

export default missionsReducer;
