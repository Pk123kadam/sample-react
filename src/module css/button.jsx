import React from 'react'
import style from "./Button.module.css"

function Button({ color }) {
    return (
        <div><button className={`${color} ${style.btn}`}>button</button></div>
    )
}

export default Button