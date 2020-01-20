//ACTIONS
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

//action creator

export const incCouner = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decCounter = () => ({
  type: DECREMENT_COUNTER
});

const initialState = {
  count: 0
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1
      };
    case DECREMENT_COUNTER:
      if (state.count <= 0) {
        return {
          count: 0
        };
      } else {
        return {
          count: state.count - 1
        };
      }
    default:
      return state;
  }
}
