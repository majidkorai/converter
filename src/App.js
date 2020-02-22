import React, { useState } from 'react';
import './App.css';
import RomanNumeral from './RomanNumerals';

function App() {
  const [number, setNumber] = useState('');
  const [roman, setRoman] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('')
  const handleChange = (e) => {
    const type = e.target.name;
    if (type === 'roman')
      setRoman(e.target.value);
    else
      setNumber(e.target.value);
    setType(type);
    e.preventDefault();
  }
  const convert = () => {
    switch (type) {
      case 'number': {
        const res = RomanNumeral.ToRoman(number);
        if (res.error) {
          setError(res.error)
          setRoman('');
        }
        else {
          setError('');
          setRoman(res.result);
        }

      }
        break;
      case 'roman': {
        const res = RomanNumeral.ToNumber(roman);
        if (res.error) {
          setError(res.error);
          setNumber('');
        }
        else {
          setError('');
          setNumber(res.result);
        }

      }
        break;
      default:
        break;
    }
  }
  const ErrorMsg = ({ error }) => {
    return error ? <label ><strong>Error: </strong>{error}</label> : "";
  }
  return (
    <div className="App">
      <input type="text" name="number" value={number} onChange={handleChange} placeholder="Enter number" />
      <ErrorMsg error={error}></ErrorMsg>
      <div><button onClick={convert}>Convert</button></div>
      <input type="text" name="roman" value={roman} onChange={handleChange} placeholder="Enter roman" />
    </div>
  );
}

export default App;
