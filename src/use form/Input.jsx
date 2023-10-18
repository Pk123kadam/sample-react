import React from 'react'

function Input(props) {
    console.log(props)
    return (

        <>
            <input
                {...props}>
            </input></>
    )
}

export default Input
