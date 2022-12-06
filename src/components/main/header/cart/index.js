import React from "react";
import './style.css';
import cartFull from './imgs/shopping-cart-full.png';
import cartEmpty from './imgs/shopping-cart-empty.png';
import UserContext from "../../userContext";
import Order from "./order";

function Cart () {

 const { userProfile } = React.useContext(UserContext);
 const [show, setShow] = React.useState(false);
 const showOrder = () => {
  console.log('showOrder was clicked')
  setShow(true);
 };
 console.log('show:', show);

 return (
  <div className="cart" onClick={showOrder}>
   <img src={userProfile.products.length ? cartFull : cartEmpty} alt='' />
   <div className="cart-counter">{userProfile.products.length}</div>
   <Order show={show} close={() => setShow(false)} />
  </div>
 );
}

export default Cart;