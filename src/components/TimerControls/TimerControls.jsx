import React from "react";

export default function TimerControls({ onStart, onStop }) {
  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}
