import { useState } from 'react';
import './App.css';
import WeatherWidget from './components/weatcher-widget';
import { SnackbarProvider } from 'react-snackbar-messages';
function App () {
  const [cityName, setCityName] = useState('Kyiv');
  // onFocus - click on element
  // onBlur - click on other element
  // click on element => onFocus
  // click on element => onFocus => click on other element => onBlur

  const changeCityName = (event) => {
    // event.target -- HTML element where event happened
    const value = event.target.value;
    console.log(value);
    setCityName(value);
  };
  return (
    <SnackbarProvider>
      <div className="App">
        <div className='city-input'>
          <input onBlur={changeCityName} />
        </div>
        <WeatherWidget city={cityName} />
      </div>
    </SnackbarProvider>
  );
}

export default App;
