const rocketsAPI = 'https://api.spacexdata.com/v3/rockets/';

// Actions

const GET_ROCKETS = 'redux/Rockets/Rockets/GET_ROCKETS';
const TOGGLE_RESERVATION = 'redux/Rockets/Rockets/TOGGLE_RESERVATION';

// Reducer

export default function rocketsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case TOGGLE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
}

// Action Creator

function getRockets() {
  return async (dispatch) => {
    const response = await fetch(rocketsAPI);
    const data = await response.json();
    const rockets = [];
    data.forEach((rocket) => {
      const newRocket = {
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        description: rocket.description,
        img: rocket.flickr_images[0],
        reserved: false,
      };
      rockets.push(newRocket);
    });
    dispatch({
      type: GET_ROCKETS,
      payload: rockets,
    });
  };
}

const toggleReservation = (id) => ({
  type: TOGGLE_RESERVATION,
  payload: id,
});

export { getRockets, toggleReservation };
