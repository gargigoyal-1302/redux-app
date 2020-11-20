import { BUYCAKE } from './CakeActionTypes';

/// initial state
const initialState = {
  numberOfCakes: 10,
};

//Reducer must be a function and must be individually exported
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYCAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

export default Reducer;
