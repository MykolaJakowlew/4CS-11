import React from "react";
import { useContext } from "react";
import UserContext from "../../userContext";
import './style.css';

/**
 * 
 * @param {Object} props 
 * @param {String} props.brand
 * @param {String} props.title
 * @param {String} props.category
 * @param {String} props.description
 * @param {number} props.discountPercentage
 * @param {number} props.id
 * @param {number} props.price
 * @param {number} props.rating
 * @param {number} props.stock
 * @param {string} props.thumbnail
 * @param {string[]} props.images
 * @returns 
 */
function Product (props) {

 const { setUserProfile } = React.useContext(UserContext);

 const addToCart = () => {
  console.log(props);
  setUserProfile((prevState) => {
   const { products } = prevState;

   const product = products.find(e => e.id === props.id);
   if (product) {
    product.count += 1;
   } else {
    products.push({ ...props, count: 1 });
   }

   return {
    ...prevState,
    products: [
     ...products,
    ]
   };
  });
 };

 return (
  <div className="product">
   <div>id:{props.id}</div>
   <div>{props.title}</div>
   <div>category: {props.category}</div>
   <div>price: {props.price}</div>
   <button onClick={addToCart}>Add to cart</button>
  </div>
 );
}

export default Product;