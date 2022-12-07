import React from "react";
import Context1 from "../context1";
import './style.css';

function Comp1 () {
 console.log('Comp1 re-render');
 const msg = React.useContext(Context1);
 return (
  <div className="circle">Comp1<br /> msg:{msg}</div>
 );
}

export default Comp1;