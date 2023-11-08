import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
  const navigate = useNavigate()
  const [data, Setdata] = useState({})

  function handlesubmit(e) {
    e.preventDefault()
    let add = async () => {
      let datas = await axios.post("https://64ccec742eafdcdc851a7719.mockapi.io/users", data)
    }
    add()
    navigate("/")
  }
  function handlechange(e) {
    Setdata({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>name:</label>
        <input type='text' name='name' onChange={handlechange}></input>
        <label>Email:</label>
        <input type='text' name='email' onChange={handlechange}></input>
        <label>Phone:</label>
        <input type='text' name='phone' onChange={handlechange}></input>
        <button type='submit'>Submit</button>
      </form>



    </div>
  )
}

export default Add
