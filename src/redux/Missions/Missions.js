const missionsAPI = 'https://api.spacexdata.com/v3/missions';

// Actions

const GET_MISSIONS = 'redux/Rockets/Rockets/GET_MISSIONS';
const TOGGLE_MISSION = 'redux/Rockets/Rockets/RESERVE_MISSION';

// Reducer

export default function missionsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case TOGGLE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: !mission.reserved };
      });

    default:
      return state;
  }
}

// Action Creator

function getMissions() {
  return async (dispatch) => {
    const response = await fetch(missionsAPI);
    const data = await response.json();
    const missions = [];
    data.forEach((mission) => {
      const newMission = {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      };
      missions.push(newMission);
    });
    dispatch({
      type: GET_MISSIONS,
      payload: missions,
    });
  };
}

const toggleMission = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

export { getMissions, toggleMission };
