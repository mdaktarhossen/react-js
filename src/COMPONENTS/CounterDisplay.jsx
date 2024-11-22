// src/components/CounterDisplay.jsx
import React from "react";

const CounterDisplay = ({ count }) => {
  return (
    <div className="text-2xl font-semibold text-center my-4">
      Current Count: <span className="text-blue-600">{count}</span>
    </div>
  );
};

export default CounterDisplay;
