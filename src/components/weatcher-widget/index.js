import React, { useEffect, useState } from "react";
import './style.css';
// https://openweathermap.org/
import weatherMock from './weather.mock.json';
import axios from 'axios';
// https://www.npmjs.com/package/react-loader-spinner
import { Bars } from 'react-loader-spinner';
import { SnackbarProvider, useSnackbar } from 'react-snackbar-messages';


function WeatherWidget (props) {
  const [isLoad, setIsLoad] = useState(false);
  const [weatherData, setWeatherData] = useState(weatherMock);

  const snackbar = useSnackbar();
  // setTimeout(() => { setIsLoad(true); }, 5000);
  useEffect(() => {
    setIsLoad(false);
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6490ea3ba3c851128f51015075087`
    ).then(response => {
      console.log(response.data);
      setWeatherData(response.data);
      setIsLoad(true);
    }).catch(err => {
      console.log(err);
      switch (err.response.status) {
        case 401: {
          snackbar.add('Wrong api key was used', {
            appearance: 'info',
            autoDismiss: true,
            placement: 'top-right'
          });
          break;
        }
        case 404: {
          snackbar.add('You set wrong city name', {
            appearance: 'error',
            autoDismiss: true,
            placement: 'top-right'
          });
          break;
        }
        case 429: {
          snackbar.add('To many request per second', {
            appearance: 'info',
            autoDismiss: true,
            placement: 'top-right'
          });
        }
        default: { }
      }
    });
  },
    // componentDidAmount -- first component render
    []
    // componentDidUpdate -- each time when dependencies was changed
    // [props.city]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   setIsLoad(false);
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6490ea3ba3c851128f51015075087ee2`
  //     );
  //     console.log(response.data);
  //     setWeatherData(response.data);
  //     setIsLoad(true);
  //   } catch (err) {
  //     console.log(err);
  //     switch (err.response.status) {
  //       case 401: {
  //         snackbar.add('Wrong api key was used', {
  //           appearance: 'info',
  //           autoDismiss: true,
  //           placement: 'top-right'
  //         });
  //         break;
  //       }
  //       case 404: {
  //         snackbar.add('You set wrong city name', {
  //           appearance: 'error',
  //           autoDismiss: true,
  //           placement: 'top-right'
  //         });
  //         break;
  //       }
  //       case 429: {
  //         snackbar.add('To many request per second', {
  //           appearance: 'info',
  //           autoDismiss: true,
  //           placement: 'top-right'
  //         });
  //       }
  //       default: { }
  //     }
  //   };
  // },
  //   // componentDidAmount -- first component render
  //   []
  //   // componentDidUpdate -- each time when dependencies was changed
  //   // [props.city]
  // );
  return (
    isLoad
      ? <div className="weather-widget">
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
      : <Bars />

    // isLoad == false
    // !isLoad
    //   ? <Bars />
    //   : <div className="weather-widget">
    //     <div>City name:{props.city}</div>
    //     <div className="row-flex">
    //       <div className="weather-widget-coord">
    //         <div>Longitude:{weatherData.coord.lon}</div>
    //         <div>Latitude:{weatherData.coord.lat}</div>
    //       </div>
    //       <div className="weather-widget-image">
    //         {/* <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='' /> */}
    //       </div>
    //     </div>
    //   </div>
  );
}

export default WeatherWidget;