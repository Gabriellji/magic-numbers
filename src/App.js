import React, { useState } from 'react';
import Button from './componets/Button/Button';
import Input from './componets/Input/Input';
import TextContainer from './componets/TextContainer/TextContainer';

import axios from 'axios';
import './App.css';


const App = () => {

  const [number, setNumberFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const getNumberFact = () => {
    if (!value) {
      return;
    }
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
      return;
    }
    setValue(number);
  }

  return (
    <div className="App">
      <Input
        type="text"
        value={value}
        placeholder="⚆ _ ⚆"
        onChange={handleChange}
      />
      <Button
        text={'Get Fact'}
        onClick={getNumberFact}
      />
      {
        loading && <p>Loading data ...</p>
      }
      {
        number && <h1>{number}</h1>
      }
      <Button
        text={'Get Random Fact'}
        onClick={getRandomNumberFact}
      />
    </div>
  );
}

export default App;
