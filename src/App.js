import React, {useRef} from 'react';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';

function App() {

  //Variables
  const input = useRef();

  //Functions
  /*function typeNumber(){

    const number = input.current.value;

    if(typeof number != 'number'){
      input.current.value = 'Enter a Number Please';
    }
    else if(typeof number === 'number'){
      if(){

      }
      if(){

      }
      if(){

      }
    }

  }*/

  return (
    <>
    <input ref={input} placeholder={0}></input>
    <NumberButtons number={1}/>
    <NumberButtons number={2}/>
    <NumberButtons number={3}/>
    <OperatorButtons operator={'+'}/>
    <OperatorButtons operator={'-'}/>
    <OperatorButtons operator={'/'}/>
    <OperatorButtons operator={'*'}/>
    </>
  )
}

export default App;
