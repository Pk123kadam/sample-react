import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Crud() {

    const[data,Setdata] = useState([])
    useEffect(()=>{
        let user =async ()=>{
            let data =await axios.get("https://64ccec742eafdcdc851a7719.mockapi.io/users")
            Setdata(data.data)
            
        }
        user()
    },[])
    function handledelete(id){
         let del = data.filter((e)=>e.id !== id)
         Setdata(del)

    }
 
  return (
    <div className='container'>
     <Link to="/add">   <button className='btn btn-primary'>Add Users</button></Link>

        <table class="table">
  <thead>
    <tr>
    <th scope="col">avatar</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      

    </tr>
  </thead>
  <tbody>
   {data.map((item,index)=>{
    return <>   
     <tr key={item.id}>
     <td><img src={item.avatar} className='rounded-circle'></img></td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
   
      <td><Link to={`/update/${item.id}`}><button className='btn btn-primary'>Update</button></Link></td>
      <td><button className="btn btn-danger" onClick={()=>{handledelete(item.id)}}>Delete</button></td>

    </tr></>
   })}
 
  </tbody>
</table>

      
    </div>
  )
}

export default Crud
