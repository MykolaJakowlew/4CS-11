import React from "react";
import { useContext } from "react";
import Context2 from "../context2";

function Comp2 () {
 console.log('Comp2 re-render');
 const { firstName } = useContext(Context2);
 return (
  <div className="circle">Comp2<br />firstName :{firstName}</div>
 );
}

export default Comp2;