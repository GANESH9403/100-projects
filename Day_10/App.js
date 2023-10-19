import React from 'react'
import Mycart from './Mycart'
import Countdown from './Countdown'
import Card from './Card'
import Searchitemdata from './Searchitemdata'
function App() {

  return (
   <div style={{backgroundColor:"#d2d2d2"}} className="position-absolute h-100 w-100">
        <>
        <div className=' mt-3 row row-cols-2 g-lg-3 mx-2 mx-lg-0 g-1 row-cols-md-4 bg-secondary'>
        {Searchitemdata.data.map(e=>{
          return <Card data={e}/>
        })}

        </div>
        
        </>
        </div>

  )
}

export default App