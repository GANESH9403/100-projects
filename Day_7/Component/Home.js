import React, { useState } from "react";
import axios from 'axios'
// import { useState } from 'react'
// import PhoneInput from 'react-phone-number-input'

import "react-phone-number-input/style.css";
function Home() {
  const[name,setName]=useState()
  const[dob,setDob]=useState()
  const[phone,setPhone]=useState()
  const[aphone,setAphone]=useState()
  const[email,setEmail]=useState()
  const[message,setMessage]=useState()
  function submit(e){
    e.preventDefault();
    axios.post("http://localhost:3001/data",{name,dob,phone,aphone,email,message})
    .then(result=>console.log(result.status))
    .catch(err=>console.log(err))
    
    
  }


  // const [value, setValue] = useState()
  return (
    <div className="w-75 mx-auto mt-3 mt-md-5 shadow-lg p-3">
      <form onSubmit={submit} autoComplete="off">
        <div className="row">
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
            required
              id="name"
              type="text"
              className="form-control"
              placeholder="GANESH S" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="dob">
              D.O.B
            </label>
            <input
              id="dob"
              className="form-control date"
              type="date"
              placeholder="Dob"
            onChange={(e)=>setDob(e.target.value)}/>
          </div>
        </div>
        <div className="row mt-md-3">
          {/* <PhoneInput
      defaultCountry="US"
      inputClass="form-control"
      value={value}
      onChange={setValue}/> */}
            <div className="col-12 col-md-4">
            <label htmlFor="atel" className="form-label">Phone</label>
            <input
              id="atel"
              className="form-control"
              type="atel"
              placeholder="+91 987654321"
            onChange={(e)=>setPhone(e.target.value)}
           required />
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="tel" className="form-label">Alternative number</label>
            <input
              id="tel"
              className="form-control"
              type="tel"
              placeholder="+91 987654321"
              onChange={(e)=>setAphone(e.target.value)}/>
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              className="form-control"
              type="tel"
              placeholder="abc@gmail.com"
              onChange={(e)=>setEmail(e.target.value)}/>
          </div>
            <div className="row my-md-3">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea id="message" className="form-control m-3 " rows={5}onChange={(e)=>setMessage(e.target.value)} />
          </div>
          <div className="row mx-auto">
          <button type="submit"  className="btn btn-primary col-lg-4 col-md-6 mx-auto">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Home;
