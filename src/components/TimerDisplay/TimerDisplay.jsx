import React from "react";

export default function TimerDisplay({ seconds }) {
    const result = new Date(seconds * 1000).toISOString().slice(11, 19)

  return (
    <div className="Timer__value">
      {result}
    </div>
  );
}
