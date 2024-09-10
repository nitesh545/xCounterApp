import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counterVal, setCounterVal] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h5>Count: {counterVal}</h5>
      <button onClick={() => { setCounterVal(counterVal + 1); }}>Increment</button>
      <button onClick={() => { setCounterVal(counterVal - 1); }}>Decrement</button>
    </div>
  );
}

export default App;
