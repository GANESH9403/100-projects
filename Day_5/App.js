
import './App.css';
import { useState } from 'react';
import { motion } from "framer-motion"
function App() {
  
const list={aminate:{y:-100}}
  return (
    <div className='center bg-light position-absolute'>
      <div className='bg-warning p-5'>
  <input id='input' className='form-control' type='password'placeholder='Password'/><br/>
  <div className="form-check">
    <input onChange={()=>{
     const value= document.getElementById('input').getAttribute("type")
     value=="text"?document.getElementById("input").setAttribute("type","password"):document.getElementById("input").setAttribute("type","text")
    }} id='check' type="checkbox" className="form-check-input  align-self-start"/>
    <label className='text-primary user-select-none' htmlFor='check'>Show Password</label>
    </div>
  </div>

</div>

  );
}

export default App;
