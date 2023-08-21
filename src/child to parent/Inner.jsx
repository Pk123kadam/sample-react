import React from 'react'

function Inner({ call }) {
    let data1 = 30
    call(data1)

    return (
        <div>Inner


        </div>
    )
}

export default Inner