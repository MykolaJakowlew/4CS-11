import React from "react";
import './style.css';
// https://openweathermap.org/
import weatherMock from './weather.mock.json';

function WeatherWidget (props) {
 const icon = weatherMock.weather[0].icon;
 return (
  <div className="weather-widget">
   <div className="row-flex">
    <div className="weather-widget-coord">
     <div>Longitude:{weatherMock.coord.lon}</div>
     <div>Latitude:{weatherMock.coord.lat}</div>
    </div>
    <div className="weather-widget-image">
     <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='' />
    </div>
   </div>
  </div>
 );
}

export default WeatherWidget;