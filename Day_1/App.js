import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Currency from './Currency';


function App() {
  let [state,setState]=useState(0)
  function fun(e){
    setState(e.target.value)
  }
  return (
    <div style={{backgroundColor:"#F9D1D1"}} className="d-flex position-absolute w-100 h-100  align-items-center justify-content-center">
    
    <div style={{backgroundColor:"#F765A3"}} className='w-50 rounded-4 p-3 d-flex align-items-center mt-5 justify-content-center flex-column'>
    <h1 className='mb-3'>Number to Currency </h1>
    <input onChange={fun} style={{fontSize:'20px',fontWeight:'bolder',color:"#161BAA"}} type='text' className="form-control w-75 text-center"/>
        <h2 style={{color:"#0B1354"}} className='mt-3'><Currency value={state}/></h2>
        </div>
    </div>
  );
}

export default App;
