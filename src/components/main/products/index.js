import React, { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import Loader from "../loader";
import Product from "./product";

function Products () {
 const [products, setProducts] = useState([]);
 const [isLoad, setIsLoad] = useState(false);

 useEffect(() => {
  axios.get(
   'https://dummyjson.com/products?limit=10&skip=0'
  ).then(response => {
   console.log(response.data);
   setProducts(response.data.products);
   setIsLoad(true);
  });


 }, []);

 return (
  <div className="full-parent">
   {
    !isLoad
     ? <div className="full-screen center"><Loader /></div>
     : <div className="products-wrapper">
      {products.map(product => <Product
       brand={product.brand}
       category={product.category}
       description={product.description}
       discountPercentage={product.discountPercentage}
       id={product.id}
       images={product.images}
       price={product.price}
       rating={product.rating}
       stock={product.stock}
       thumbnail={product.thumbnail}
       title={product.title}
      />)}
     </div>
   }
  </div>
 );
}

export default Products;