import React, { useState } from 'react';
import './App.css'

export default function App() {

  let [screenValue, setScreenValue] = useState('')
  let [isCalculated, setIsCalculated] = useState(false);

  const getBtnValue = (val) => {
    let value = screenValue;

    if (isCalculated && (typeof (val) === "number")) {
      setScreenValue("");
      value = '';
    }
    setScreenValue(value + val)
    setIsCalculated(false);
  }

  const clr = () => {
    setScreenValue("");
  }

  const calculate = () => {
    setScreenValue(eval(screenValue));
    setIsCalculated(true);
  }

  return (
    <div className="calculator">
      <div>
        <input value={screenValue} className='screen' readOnly></input>
      </div>
      <div>
        <div className="btnsDiv">
          <button onClick={clr} style={{ backgroundColor: 'red', color: 'white' }}>C</button>
          <button onClick={() => getBtnValue(1)}>1</button>
          <button onClick={() => getBtnValue(2)}>2</button>
          <button onClick={() => getBtnValue('+')} style={{ backgroundColor: 'tan' }}>+</button>
          <button onClick={() => getBtnValue(3)}>3</button>
          <button onClick={() => getBtnValue(4)}>4</button>
          <button onClick={() => getBtnValue(5)}>5</button>
          <button onClick={() => getBtnValue('-')} style={{ backgroundColor: 'tan' }}>-</button>
          <button onClick={() => getBtnValue(6)}>6</button>
          <button onClick={() => getBtnValue(7)}>7</button>
          <button onClick={() => getBtnValue(8)}>8</button>
          <button onClick={() => getBtnValue('*')} style={{ backgroundColor: 'tan' }}>*</button>
          <button onClick={() => getBtnValue(9)}>9</button>
          <button onClick={() => getBtnValue(0)}>0</button>
          <button onClick={calculate} >=</button>
          <button onClick={() => getBtnValue('/')} style={{ backgroundColor: 'tan' }}>/</button>
        </div>
      </div>
    </div >
  )
}