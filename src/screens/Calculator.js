import { Box } from '@mui/material';
import React, { useState } from 'react';
import '../App.css'
import Button from './components/Button';
import Screen from './components/Screen';

export default function Calculator() {

  let [screenValue, setScreenValue] = useState('')
  let [isCalculated, setIsCalculated] = useState(false);

  const getBtnValue = (val) => {
    let value = screenValue;
    if (isCalculated && (typeof (val) === "number")) {
      setScreenValue("");
      value = '';
    }
    setScreenValue(value + val);
    setIsCalculated(false);
  }
  const clr = () => setScreenValue("");
  
  const calculate = () => {
    setScreenValue(eval(screenValue));
    setIsCalculated(true);
  }

  return (
    <Box className="calculator">
          <Screen value={screenValue} onChange={setScreenValue} />
        <Box className="btnsDiv">
            <Button onClick={clr} label='C' style={{ backgroundColor: 'red', color: 'white' }} />
            <Button onClick={() => getBtnValue(1)} label={1} />
            <Button onClick={() => getBtnValue(2)} label={2} />
            <Button onClick={()=>getBtnValue('+')} label='+' style={{ backgroundColor: 'tan'}} />
            <Button onClick={() => getBtnValue(3)} label={3} />
            <Button onClick={() => getBtnValue(4)} label={4} />
            <Button onClick={() => getBtnValue(5)} label={5} />
            <Button onClick={()=>getBtnValue('-')} label='-' style={{ backgroundColor: 'tan'}} />
            <Button onClick={() => getBtnValue(6)} label={6} />
            <Button onClick={() => getBtnValue(7)} label={7} />
            <Button onClick={() => getBtnValue(8)} label={8} />
            <Button onClick={()=>getBtnValue('*')} label='*' style={{ backgroundColor: 'tan'}} />  
            <Button onClick={() => getBtnValue(9)} label={9} />
            <Button onClick={() => getBtnValue(0)} label={0} />
            <Button onClick={calculate} label='=' style={{ backgroundColor: 'tan'}} />
            <Button onClick={()=>getBtnValue('/')} label='/' style={{ backgroundColor: 'tan'}} />
        </Box>
    </Box >
  )}