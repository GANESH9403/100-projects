import React from 'react'
import './Catagory.css'

function Catagory(props) {
  return (

<div className="mx-1">
     <div id="size-cover" className="d-flex align-items-center  flex-column justify-content-center mx-4"> 
     <img className="img-fluid" src={props.url}/>
      
      <a><h6 id="text-sm">{props.value}</h6></a>
     
      
      </div>
      
      </div>
    


  )
}

export default Catagory