// src/App.jsx
import React, { useState } from "react";
import CounterButton from "./components/CounterButton";
import CounterDisplay from "./components/CounterDisplay";

const App = () => {
  const [count, setCount] = useState(0);

  // Event handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0); // Avoid negative numbers
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">React Counter App</h1>
      <CounterDisplay count={count} />
      <div className="flex space-x-4">
        <CounterButton label="Increment" onClick={increment} bgColor="bg-green-500" />
        <CounterButton label="Decrement" onClick={decrement} bgColor="bg-red-500" />
        <CounterButton label="Reset" onClick={reset} bgColor="bg-gray-500" />
      </div>
    </div>
  );
};

export default App;
