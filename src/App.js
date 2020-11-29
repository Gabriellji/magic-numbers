import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

  const [number, setNumberFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const getNumberFact = () => {
    setLoading(true);
    axios
    .get(`http://numbersapi.com/${value}/math`)
    .then(res => {
      setNumberFact(res.data);
      setLoading(false);
    })
    .catch(error => console.log(error));
      setValue('')
  }

  const getRandomNumberFact = () => {
    setLoading(true);
    axios
    .get('http://numbersapi.com/random/math')
    .then(res => {
      setNumberFact(res.data);
      setLoading(false);
    })
    .catch(error => console.log(error));
  }

  const handleChange = (e) => {
    const number = Number(e.target.value)
    if (!number) {
      alert('acsept only numbers!')
    }
    setValue(number)
  }

  return (
    <div className="App">
      <input
      type="text"
      value={value}
      placeholder="type yout number here"
      onChange={handleChange}
      >
      </input>
      <button
      onClick={getNumberFact}
      >Click</button>
      {
        loading && <p>Loading data ...</p>
      }
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
