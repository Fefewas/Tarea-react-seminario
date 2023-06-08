import React, { useState } from 'react';

import '../stylesheets/celsiusToFahrenheit.css';
const CelsiusToFahrenhait = () => {
    
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const inputValue = e.target.value;
    setCelsius(inputValue);
    setFahrenheit(inputValue !== '' ? celsiusToFahrenheit(inputValue) : '');
  };

  const handleFahrenheitChange = (e) => {
    const inputValue = e.target.value;
    setFahrenheit(inputValue);
    setCelsius(inputValue !== '' ? fahrenheitToCelsius(inputValue) : '');
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  return (
    <div className='conversorContainer'>
      <h1>Converter</h1>
      <h2>Celcius to fahrenheit</h2>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
    </div>
  );
}

export default CelsiusToFahrenhait;