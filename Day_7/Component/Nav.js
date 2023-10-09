import React from 'react'
import  { Route,Routes,NavLink } from 'react-router-dom'
import Home from './Home'
import Table from './Table'
import Recovery from './Recovery'
import "./Nav.css"
function Nav() {
  return (
    <>
    <nav className="nav bg-light d-flex justify-content-around p-3 shadow-sm">
    <NavLink to="/" className="btn btn-lg btn-primary shadow-sm">Home</NavLink>
    <NavLink to="/Table" className="btn btn-lg btn-secondary  shadow-sm">Table</NavLink>
    <NavLink  to="/Recovery" className="btn btn-lg btn-warning text-light shadow-sm">Recover</NavLink>
  
  </nav>
  <div>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Table' element={<Table/>}/>
      <Route path='/Recovery' element={<Recovery/>}/>
    </Routes>
  </div>
  </>
  )
}

export default Nav