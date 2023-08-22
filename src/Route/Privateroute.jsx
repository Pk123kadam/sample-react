import React from 'react'
import { Navigate } from 'react-router-dom'

function Privateroute({ children }) {
    let login = false
    if (!login) {
        return <Navigate to="/login" replace></Navigate>
    }


    return children
}

export default Privateroute