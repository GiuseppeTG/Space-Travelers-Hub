const rocketsAPI = 'https://api.spacexdata.com/v3/rockets/';

// Actions

const GET_ROCKETS = 'redux/Rockets/Rockets/GET_ROCKETS';

// Reducer

export default function rocketsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
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

export { getRockets };
