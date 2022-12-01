import React from "react";
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

 return (
  <div className="product">
   <div>{props.title}</div>
   <div>category: {props.category}</div>
   <div>price: {props.price}</div>
  </div>
 );
}

export default Product;