import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR, ADD_SMURF } from "../actions/Index";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        missions: [],
      };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: {
          ...state.smurfs,
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height,
        },
      };
    default:
      return state;
  }
};
