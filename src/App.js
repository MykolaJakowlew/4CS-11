import React from "react";
import { useState } from "react";
import './App.css';
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Comp3 from "./components/comp3";
import Comp4 from "./components/comp4";
import Comp5 from "./components/comp5";
import Context1 from "./components/context1";
import Context2 from "./components/context2";

function App () {

  const [profile, setProfile] = useState({
    firstName: "firstName",
    lastName: 'lastName'
  });

  const changeFirstName = (event) => {
    const value = event.target.value;
    setProfile((prevState) => {

      return {
        ...prevState,
        firstName: value
      };
    });
  };

  const changeLastName = (event) => {
    const value = event.target.value;
    setProfile((prevState) => {

      return {
        ...prevState,
        lastName: value
      };
    });
  };

  return (
    <div className='App'>
      first name: <input onChange={changeFirstName} /><br />
      last name: <input onChange={changeLastName} /><br />
      <Context1.Provider value={"This message from context 1"}>
        <Comp1 />
        <Context2.Provider value={profile}>
          <Comp2 />
          <Comp3 />
          <Comp4 />
          <Comp5 />
        </Context2.Provider>

      </Context1.Provider>

    </div>
  );
}

export default App;
