import React, { useState } from "react";
import './style.css';

function ModalWindow (props) {
 return (
  <div
   style={props.style}
   onClick={props.onClick}
   className="modal-window">
   {props.children}
  </div>
 );
}

export default ModalWindow;