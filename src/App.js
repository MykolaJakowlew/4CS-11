import React from "react";
import './App.css';
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import { Provider } from 'react-redux';
import store from './store';
import Comp3 from "./components/comp3-anim";

function App () {


  return (
    <div className='App'>
      <Comp3 />
      <Provider store={store}>
        <Comp1 />
        <Comp2 />
      </Provider>
    </div>
  );
}

export default App;
