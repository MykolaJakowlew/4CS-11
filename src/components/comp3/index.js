import React from "react";
import { useContext } from "react";
import Context2 from "../context2";

function Comp3 () {
 console.log('Comp3 re-render');
 const { lastName } = useContext(Context2);
 return (
  <div className="circle">Comp3<br />lastName:{lastName}</div>
 );
}

export default Comp3;