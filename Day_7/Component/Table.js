import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function Table() {
  let [user,setUsers]=useState([{name:"",dob:"",phone:"",aphone:"",email:"",message:""}])
useEffect(()=>{
  axios.get("http://localhost:3001/table")
  .then(result=>setUsers(result.data) )
  .catch(err=>console.log(err))
  
  
},[])

const del=(e)=>{
const tr=e.target.parentNode.parentNode.parentNode;

tr.remove()
}

console.log(user)
  return (
    <>
      <table  className="table table-bordered table-striped text-center mx-4  w-100  my-5">
        <thead>
          <tr>
            <th>Sno</th>
          <th>Name</th>
          <th>D.O.B</th>
          <th>Phone Number</th>
          <th>Alternative Number</th>
          <th>Email</th>
          <th>Message</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody  onClick={(e)=>console.log(e.target)}>
          
      {user.map((e)=>{
      return<tr >
        <td>1</td>
          <td>{e.name}</td>
          <td>{e.dob}</td>
          <td>{e.phone}</td>
          <td>{e.aphone}</td>
          <td>{e.email}</td>
          <td  className="overflow-x-scroll">{e.message}</td>
          <td>
          <span  class="d-flex justify-content-center">
          <button  class="btn btn-warning text-light edit d-flex align-items-center justify-content-center gap-1 p-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-arrow-up" viewBox="0 0 16 16">
      <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
    </svg>Retrive</button>
      <button onClick={del} class="btn btn-danger mx-2 del d-flex align-items-center justify-content-center gap-1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>Delete</button>
      </span>
          </td>
        </tr>
      })}
         
        </tbody>
        
      </table>
      </>
    
  )
}

export default Table