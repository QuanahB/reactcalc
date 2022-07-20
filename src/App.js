import React, {useState,useRef} from 'react';

function App() {

  //Variables
  const input = useRef();
  const [answer,updateAnswer] = useState(0) //Have "updateAnswer" always work with previous answer/ previous state(?)
  const [operator,updateOperator] = useState()
  const [items,addItems] = useState([])

  //Functions
  function typeNumber(n){

    const number = Number(input.current.value);

    if(typeof number != 'number'){
      console.log(input.current.value);
      input.current.value = 'Enter a Number Please';
    }
    else if(typeof number === 'number'){
      if(n === 1){
        const currentNum = '' + number + 1
        input.current.value = currentNum
      }
      if(n === 2){
        const currentNum = '' + number + 2
        input.current.value = currentNum
      }
      if(n === 3){
        const currentNum = '' + number + 3
        input.current.value = currentNum
      }
    }

  }

  function updateExpression(){
    addItems(prev => [...prev,"Hello"]);
  }

  function giveAnswer(n){

    if(n === '+'){
      updateOperator(n)
      updateAnswer(answer + Number(input.current.value))
      input.current.value = 0
    }
    if(n === '-'){
      updateOperator(n)
      updateAnswer(Number(input.current.value) - answer)
      input.current.value = 0
    }
    if(n === '/'){
      updateOperator(n)
      updateAnswer(Number(input.current.value)/answer)
      input.current.value = 0
    }
    if(n === '*'){
      updateOperator(n)
      updateAnswer(answer * Number(input.current.value))
      input.current.value = 0
    }
  }

  return (
    <>
    <input ref={input} placeholder={0}></input>
    <button onClick={() => typeNumber(1)}>1</button>
    <button onClick={() => typeNumber(2)}>2</button>
    <button onClick={() => typeNumber(3)}>3</button>
    <button onClick={() => giveAnswer('+')}>+</button>
    <button onClick={() => giveAnswer('-')}>-</button>
    <button onClick={() => giveAnswer('/')}>/</button>
    <button onClick={() => giveAnswer('*')}>*</button>
    <button onClick={() => updateExpression()}>=</button>
    <span>{answer}</span>
    <span>{operator}</span>
    <span>{items}</span>
    </>
  )
}

export default App;
