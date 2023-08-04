import React from 'react'
import { Navigate } from 'react-router-dom'

function Login({action,state}) {

  return (
    <div>
        <button onClick={()=>{action(!state)}}>{state ? "logout":"login"}</button>
      
    </div>
  )
}

export default Login    
