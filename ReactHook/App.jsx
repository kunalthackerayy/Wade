// ************ Using useEffect ***************

// import React, { useState, useEffect } from 'react';

// function App() {
//   // Declare a state variable to store time
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   // useEffect will run once when component mounts and then every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     // Cleanup: clear interval when component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h1>Live Clock</h1>
//       <h2>{time}</h2>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '50px',
//     fontFamily: 'Arial'
//   }
// };

// export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;
  const [count, setCount] = useState(0)
  const addValue = ()=>{
      setCount(count+1)
  }
  const removeValue = ()=>{
    setCount(count-1)
}
  return (
    <>
      <h1>Game is On!</h1>
      <h2>Counter Value : {count}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br /><br />

      <button
      onClick={removeValue}
      >Remove Value</button>
      <br /><br />

      <footer>Final Counter : {count}</footer>
    </>
  )
}

export default App
