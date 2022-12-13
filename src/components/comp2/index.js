import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { actions } from "../../store";
import { actions } from "../../store/counter_2.store";
import { actions as actionsStore1 } from "../../store/counter_1.store";
import './style.css';

function Comp2 () {
 console.log('Comp2 re-render');

 const counter = useSelector(state => state.counter_2);
 const dispatch = useDispatch();

 const increment = () => {
  // dispatch(actions.increment_2(5));
  dispatch(actions.increment(5));
  dispatch(actionsStore1.increment(20));
 };

 const decrement = () => {
  // dispatch(actions.decrement_2(5));
  dispatch(actions.decrement(5));
  dispatch(actionsStore1.decrement(20));
 };

 return (
  <div className="circle">
   <div>
    Counter value: {counter.value}<br />
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
   </div>
  </div>
 );
}

export default Comp2;