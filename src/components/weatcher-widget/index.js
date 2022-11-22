import React, { useEffect, useState } from "react";
import './style.css';
import axios from 'axios';
// https://openweathermap.org/
import weatherMock from './weather.mock.json';
import ModalWindow from "../modal-window";

function WeatherWidget (props) {
 const [hide, setHide] = useState(props.hide);
 const [errorText, setErrorText] = useState();
 const [isError, setIsError] = useState(false);
 const [isLoad, setIsLoad] = useState(false);
 const [weatherData, setWeatherData] = useState();

 useEffect(() => {
  setIsLoad(false);
  if (props.city) {
   axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6490ea3ba3c851128f51015075087ee2`
   ).then((response) => {
    console.log('response:', response);
    setWeatherData(response.data);
    setIsLoad(true);
   }).catch(err => {
    switch (err.response.status) {
     case 401: {
      setErrorText(`Wrong api key was used for this request`);
      break;
     }
     case 400: {
      setErrorText(`we not found city by name:${props.city}`);
      break;
     }
     case 429: {
      setErrorText('Too many requests');
      break;
     }
     default: { }
    }
    setIsError(true);
    setHide(false);
   });
  }
 }, [props.city]);

 return (
  <div className="weather-widget">
   {isError &&
    <ModalWindow
     style={{ display: hide ? 'none' : 'flex' }}
     onClick={() => { setHide(true); }}
    >
     <div> This is error message: {errorText}</div>
    </ModalWindow>}
   {
    !isLoad
     ? (<div className="spinner-wrap"><div className="lds-spinner" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
     : (
      <div>
       <div>City name:{props.city}</div>
       <div className="row-flex">
        <div className="weather-widget-coord">
         <div>Longitude:{weatherData.coord.lon}</div>
         <div>Latitude:{weatherData.coord.lat}</div>
        </div>
        <div className="weather-widget-image">
         {/* <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='' /> */}
        </div>
       </div>
      </div>
     )
   }
  </div>
 );
}

export default WeatherWidget;