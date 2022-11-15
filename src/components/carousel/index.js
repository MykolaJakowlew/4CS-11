import React from "react";
import Carousel from 'react-material-ui-carousel';
import './style.css';

// https://www.npmjs.com/package/react-material-ui-carousel
function MyCarousel () {
 const colors = [
  'red', 'blue', 'green', 'pink'
 ];
 return (
  <div className="carousel-wrap">
   <Carousel height={'500px'}>
    {
     colors.map(color => (<div
      style={{
       backgroundColor: color
      }}
      className="carousel-elem"></div>
     ))
    }
   </Carousel>
  </div>
 );
}
export default MyCarousel;