import React, { useId, useRef } from 'react'
import './Card.css'
function Card(props) {
  const inputid =useId()
  const lableid=useId()
  const input=useRef()
  const lable=useRef()


  function changeevent(){
    lable.current.classList.toggle("text-danger")
 
  }

  return (
    
        <div className='col mt-3'>
          
            <div class="  bg-white d-flex flex-column main-div h-100 w-100 user-select-none   align-items-center shadow-sm ">
              <span className='align-self-end  me-3 position-lg-relative d-flex flex-column justify-content-center align-items-center mt-2'>
            <input ref={input} id={inputid} onChange={changeevent} className="position-absolute visually-hidden" type='checkbox'/>
            <label className="text-secondary like-lable" ref={lable} id={lableid} htmlFor={inputid} style={{fontSize:'25px'}}>&#9829;</label>
            </span>
  <img style={{width:'auto',height:'200px'}}   src={props.data.img} class=" p-2 p-lg-0 justify-content-center " alt="..."/>
  <div class=" mt-3 px-2 px-lg-3 ">
  
    <p class=" mt-2  text-wrap hover-text-blue">{'BOZICA Best Baby Gift Learning educational Assembling creative blocks construction  (100 Pieces)'.slice(0,45)}...</p>
    <span class="card-title h5 me-1">&#8377;12,000</span> <span><del className="text-secondary h6">&#8377;15,000</del></span><b className="text-success ps-2 h6">7% off</b>
   <div className="mt-1 d-flex align-items-md-baseline"> <span className="badge h4  bg-success text-white rounded-1 py-1 px-2">4.3 &#9733;</span>
    <span className="text-secondary  ps-2">(5,499)</span></div>
  </div>
</div>
</div>
  )
}

export default Card