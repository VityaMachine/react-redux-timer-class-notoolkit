import timerTypes from "./timerTypes";

const initialState = {
  totalSeconds: 0,
  remainingSeconds: 0,
};

const timerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case timerTypes.SET:
      return {
        ...state,
        totalSeconds: payload,
        remainingSeconds: payload,
      };
    case timerTypes.COUNTDOWN:
      return {
        remainingSeconds: state.remainingSeconds - 1,
      };
    default:
      return state;
  }
};

export default timerReducer;
