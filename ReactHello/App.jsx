import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("Hello, welcome to React!");

  const changeMessage = () => {
    setMessage("You clicked the button! React is awesome!");
  };

  return (
    <div className="container">
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me!</button>
    </div>
  );
}

export default App;
