import React from "react";


export default function TimerControls({ onStart, onStop }) {
  return (
    <div className="Timer__controls">
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}
