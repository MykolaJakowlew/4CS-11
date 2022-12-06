import React from "react";
import { useContext } from "react";
import UserContext from "../../../userContext";
import './style.css';

function Order (props) {
 const { userProfile, setUserProfile } = useContext(UserContext);

 const classList = ['order-wrapper'];
 if (props.show) {
  classList.push('show');
 }

 const closeOrder = (event) => {
  event.stopPropagation();
  console.log('close');
  props.close();
 };

 const removeItem = (id) => {
  setUserProfile((prevState) => {
   const { products } = prevState;
   return {
    ...prevState,
    products: products.filter(product => product.id !== id)
   };
  });
 };

 const changeCountOfItem = (event, id, value) => {
  event.stopPropagation();
  console.log('changeCountOfItem', id, value);
  setUserProfile((prevState) => {

   const { products } = prevState;
   const product = products.find(e => e.id === id);
   console.log('setUserProfile', product.count);
   product.count += value;
   console.log('setUserProfile', product.count);
   if (product.count == 0) {
    return {
     ...prevState,
     products: products.filter(e => e.id != id),
    };
   }

   return {
    // ...prevState,
    products: products,
   };
  });
 };

 const increase = (event, id) => {
  return changeCountOfItem(event, id, 1)
 }

 return (
  <div className={classList.join(' ')} onClick={closeOrder}>
   <div className="order" onClick={(event) => event.stopPropagation()}>
    {
     userProfile.products.map((product, i) => {
      return (
       <div>
        {i + 1}:{product.title}
        <div className="row margin-10">
         <div onClick={(event) => changeCountOfItem(event, product.id, -1)}>-</div>
         count:{product.count}
         <div onClick={(event) => changeCountOfItem(event, product.id, 1)}>+</div>
        </div>
        <div onClick={() => removeItem(product.id)}>remove item</div></div>
      );
     })
    }
   </div>
  </div>
 );
}

export default Order;