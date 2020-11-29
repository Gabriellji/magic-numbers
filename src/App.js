import React, { useState } from 'react';
import Button from './componets/Button/Button';
import Input from './componets/Input/Input';
import Loader from './componets/Loader/Loader';

import Title from './componets/Title/Title';
import DataContainer from './componets/DataContainer/DataContainer';

import axios from 'axios';
import styled from 'styled-components';
import './App.scss';


const MyApp = styled.div`
  display: flex;
  width: 70%;
  width: 70%;
  height: 70%;
  border-radius: 10px;
  background-color: #31037de6;
  flex-direction: column;
  align-items: center;
`;
 // background-color: #31037D;

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
    <MyApp>
      <Title
       text={"NUMBERS"}/>
      <Input
        type="text"
        value={value}
        placeholder="type your number here"
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
    </div>
  );
}

export default App;
