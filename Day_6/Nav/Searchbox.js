import React from 'react'
import './Search.css'
function Searchbox() {
  return (
    
    <div className='input-group p-2 me-1'>
        <div className="input-group-prepend">
        <span className="input-group-text border-0 rounded-start-1 rounded-end-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="#808080" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span></div>
        <input id='search' className='form-control border-0 input-sm' type="search"  placeholder='Search for Products, Brands and More'></input>
    </div>
    
  )
}

export default Searchbox