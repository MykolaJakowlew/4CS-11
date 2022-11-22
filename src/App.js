import { useState } from 'react';
import './App.css';
import WeatherWidget from './components/weatcher-widget';
function App () {
  const [cityName, setCityName] = useState();

  const onBlur = (event) => {
    const value = event.target.value;
    console.log(value);
    setCityName(value);
  };

  return (
    <div className="App">
      <input onBlur={onBlur} placeholder='City name' />
      <WeatherWidget city={cityName} />
    </div>
  );
}

export default App;
