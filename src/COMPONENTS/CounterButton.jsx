// src/components/CounterButton.jsx
import React from "react";

const CounterButton = ({ label, onClick, bgColor }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg ${bgColor} text-white font-bold shadow-md focus:outline-none`}>
      {label}
    </button>
  );
};

export default CounterButton;
