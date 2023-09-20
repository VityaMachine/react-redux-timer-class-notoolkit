import timerTypes from "./timerTypes";

export const timerSet = (seconds) => ({
  type: timerTypes.SET,
  payload: seconds,
});

export const timerCountdown = () => ({
  type: timerTypes.COUNTDOWN,
});
