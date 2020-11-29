import React, { useState } from 'react';
import Button from './componets/Button/Button';
import Input from './componets/Input/Input';
import Loader from './componets/Loader/Loader';

import DataContainer from './componets/DataContainer/DataContainer';

import axios from 'axios';
import styled from 'styled-components';
import './App.scss';
import Title from './componets/Title/Title';

const MyApp = styled.div`
  display: flex;
  background-color: #31037D;
  flex-direction: column;
  align-items: center;
`;


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
    <MyApp className="App">
      <Title
       text={"NUMBERS"}/>
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
      <DataContainer
      text={
        loading ? <Loader/> : number
      }
      />
      <Button
        text={'Get Random Fact'}
        onClick={getRandomNumberFact}
      />
    </MyApp>
  );
}

export default App;
