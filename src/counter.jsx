import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';
import './Counter.css'; // Import CSS file for styling

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <h2 className="counter-value">{count}</h2>
      <div className="button-container">
        <button onClick={() => dispatch(increment())} className="counter-button">Increment</button>
        <button onClick={() => dispatch(decrement())} className="counter-button">Decrement</button>
        <button onClick={() => dispatch(reset())} className="counter-button">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
