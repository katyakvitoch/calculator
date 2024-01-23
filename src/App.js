import './App.css';
import React, { useState } from 'react';
import NumberButtons from './components/NumberButtons.js';
import OperatorsButtons from './components/OperatorsButtons.js';
import ResultField from './components/ResultField.js';

function App() {

const [result, setResult] = useState('');
const [resultBeforePluss, setResultBeforePluss] = useState('');
const [resultAfterPluss, setResultAfterPluss] = useState('');

function onNumberButtonClick (num) {

  if (resultBeforePluss === '') {
    setResult(result + num);
  } else {
    setResultAfterPluss(resultAfterPluss + num);
  }
  
}


function onPlussButtonClick () {

  if (result !== '') {
    setResultBeforePluss(result);

    setResult('');
  }

}


function onEqalsButtonClick () {
  if (resultBeforePluss !== '' && resultAfterPluss !== '') {
    let sum = +resultBeforePluss + +resultAfterPluss;
    setResult(sum.toString());
    setResultBeforePluss('');
    setResultAfterPluss('');
  }
}
function onCleanButtonClick () {
  setResult('');
  setResultBeforePluss('');
  setResultAfterPluss('');
}


  return (
    <div className="App">
      <div className='wrapper'>
        <div>
          <ResultField result={resultBeforePluss !== '' ? resultAfterPluss : result}/>
        </div>
        <div className='num-and-op-wrapper'>
          <div className='number-wrapper'>
            <div className='number-row'>
              <NumberButtons num ={1} onButNumClick={() => onNumberButtonClick('1')} />
              <NumberButtons num ={2} onButNumClick={() => onNumberButtonClick('2')}/>
              <NumberButtons num ={3} onButNumClick={() => onNumberButtonClick('3')}/>
            </div>
            <div className='number-row'>
              <NumberButtons num ={4} onButNumClick={() => onNumberButtonClick('4')}/>
              <NumberButtons num ={5} onButNumClick={() => onNumberButtonClick('5')}/>
              <NumberButtons num ={6} onButNumClick={() => onNumberButtonClick('6')}/>
            </div>
            <div className='number-row'>
              <NumberButtons num ={7} onButNumClick={() => onNumberButtonClick('7')}/>
              <NumberButtons num ={8} onButNumClick={() => onNumberButtonClick('8')}/>
              <NumberButtons num ={9} onButNumClick={() => onNumberButtonClick('9')}/>
            </div>
            <div className='number-row nula'>
              <NumberButtons num ={0} onButNumClick={() => onNumberButtonClick('0')}/>
            </div>
          </div>
          <div className='operators-wrapper'>
            <OperatorsButtons operator={"+"} onOperatorClick={() => onPlussButtonClick()}/>
            <OperatorsButtons operator={"="} onOperatorClick={() => onEqalsButtonClick()}/>
            <OperatorsButtons operator={'C'} onOperatorClick={() => onCleanButtonClick()}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
