import React, { useState } from 'react'
import "./App.css";
 
const App = () => {
 const[input,setInput]=useState("");

 const handleAnswer=()=>{
  try{
   setInput(eval(input));
   
 
 }
 
 catch(error){
     setInput(error) ;
 }
};
 
const handleReset=()=>{
   setInput("");
}
  return (
    <div className='calculator'>
      <input className='value' type="text" value={input}/>
      <button onClick={handleReset}   className='nuclear'>AC</button>
      <button name="/"  onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>/</button>
      <button name="x" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>x</button>
      <button name="." onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>.</button>
      <button name="7"  onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>7</button>
      <button name="8" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>8</button>
      <button name="9" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>9</button>
      <button name="-" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>-</button>
      <button name="4" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>4</button>
      <button name="5" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>5</button>
      <button name="6" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>6</button>
      <button name="+" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>+</button>
      <button name="1" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>1</button>
      <button name="2" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>2</button>
      <button name="3" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>3</button>
      <button name="0" onClick={(e)=>setInput(input.concat(e.target.name))} className='num'>0</button>
      <button name="=" onClick={handleAnswer} className='num equal'>=</button>
     
    </div>
  )
}

export default App

