import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  // let counter = 500;
  const addValue=()=>{
    if(counter ==20 ) return;
    counter=counter+1;
    setCounter(counter)
    console.log(counter);

  }
  const removeValue=()=>{
    if(counter ==0 ) return;
    counter=counter-1;
    setCounter(counter)
    console.log(counter); 
  }

  return (
    
    <>
      <h1>hello this is shaikh faqruddin{counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
