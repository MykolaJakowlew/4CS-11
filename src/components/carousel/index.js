import React from "react";
import Carousel from 'react-material-ui-carousel';
import './style.css';

// https://www.npmjs.com/package/react-material-ui-carousel
function MyCarousel () {
 const colors = [
  'red', 'blue', 'green'
 ];
 return (
  <div className="carousel-wrap">
   <Carousel height={'500px'} w>
    {
     colors.map(e => (<div
      style={{
       backgroundColor: e
      }}
      className="carousel-elem"></div>
     ))
    }
   </Carousel>
  </div>
 );
}
export default MyCarousel;