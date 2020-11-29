import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

  const [number, setNumberFact] = useState('');

  const getNumberFact = (number) => {
    axios
    .get(`http://numbersapi.com/${number}/math`)
    .then(res => {
      setNumberFact(res.data)
    })
    .catch(error => console.log(error));
  }

  const getRandomNumberFact = () => {
    axios
    .get('http://numbersapi.com/random/math')
    .then(res => {
      setNumberFact(res.data)
    })
    .catch(error => console.log(error));
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      {
        number && <h1>{number}</h1>
      }
      <button
      onClick={getRandomNumberFact}
      >click me</button>
    </div>
  );
}

export default App;
