
import './App.css';
import { useState } from 'react';

function App() {
  let [state,setState]=useState(true)
  function fun(){
document.getElementById("b-ground").classList.toggle("bg-black")
state?setState(false):setState(true)
  }
  return (
  <div   id="b-ground" className='w-100 h-100 d-flex align-items-center justify-content-center position-absolute user-select-none position-relative'>
  <input  onChange={fun} className="position-absolute d-none" id='check' type='checkbox'/>
  <label  id='img'  role='button' className="position-absolute" htmlFor='check' style={{fontSize:"40px",fontWeight:"bolder", color:"white"}}>{state?<h1>&#127772;</h1>:<h1>&#9728;</h1>}</label>
  
  
  </div>
  );
}

export default App;
