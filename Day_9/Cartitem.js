import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Currency from './Currency'
function Cartitem(props) {
  
  let [count,setCount]=useState(1)
  let [amt,setAmt]=useState(props.price)
  let [ind,setInd]=useState(props.index)
  const didMount=useRef(1)
  useEffect(()=>{
  if(didMount.current<3){
    console.log("ssss")
    didMount.current=didMount.current+1;
  }
  else{
    props.fun(amt)
      props.countfun(count)
    
    props.indx(ind) 
  }
  },[amt])
  function removebtn(e){
    props.currentidfun(e)
 
  }
  function add(){
    setCount(count+=1)
    setAmt(props.price*count);
    
  }


  function less(){
    setCount(count-=1)
    setAmt(amt-props.price);  
  }

  useEffect(()=>{
    if(count<1){
      setCount(count=1)
    }
    if(props.price>amt){
      setAmt(props.price)
    }
    
  


   
  },[count,amt])

  return (
    
    <div className='row bg-light shadow-lg py-3 border border-bottom border-1'>
    
    <div className="col-12 col-lg-9">
    <div className="d-flex">
      <div className="bg-white p-2 border border-1 d-flex align-items-center justify-content-center" style={{height:'100px', width:"100px"}}>
     <img className='w-75' src={props.img}/>
     </div>
     <div className='d-flex  ms-2 flex-column'>
     <b  className="text-wrap ps-2 mb-2">{props.name}</b>
        <span  className="text-secondary d-flex flex-wrap">
        
        <span  className='ps-2'>Color:{props.color},</span>
        <span  className='ps-2'>Material:{props.material},</span><br/>
        </span>
        <span className="text-secondary ps-2">Seller: {props.seller}</span>

        <div className="mt-2 ps-2">
          <button onClick={()=>removebtn(props.id)}className='btn text-danger bg-white border border-1 me-2'>Remove</button>
          <button onClick={()=>savelaterfun(props.id)} className='btn text-primary bg-white border border-1'>Save for latter</button>
        </div>
         </div>
</div>
</div>
<div className="col-12 col-lg-3 d-flex mt-2">
    <div className="d-flex flex-row justify-content-around justify-content-lg-start w-100 flex-lg-column">
        <b><Currency value={amt}/></b><br/>
        
        <span className="d-inline-flex align-self-baseline border border-1 rounded-2">
        <button onClick={less} className='btn btn-light rounded-start-2 rounded rounded-end-0 border border-1 border-start-0 border-top-0 border-bottom-0'>-</button><b className="text-center px-3 pt-1 bg-white">{count}</b><button onClick={add} className='btn btn-light rounded-end-2 rounded rounded-start-0 border border-1 border-end-0 border-top-0 border-bottom-0'>+</button>
        </span>
        </div>
</div>

</div>
  )
}

export default React.memo(Cartitem)