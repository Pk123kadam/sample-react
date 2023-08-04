import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected(prop) {
    if(prop.islogged){
        return prop.children
    }else{
      
       
      return <Navigate to="/login" replace></Navigate>
    }

  return (
    <div>   
      
      
    </div>
  )
}

export default Protected
