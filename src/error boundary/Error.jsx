import React from 'react'


function Error({ message }) {
    if (typeof message !== "string" || !message) {
        throw Error("message must be a string")
    }
    return (
        <div>{message}</div>
    )
}

export default Error