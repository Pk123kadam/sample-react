import React from 'react'
import Higherorder from './Higherorder'

function Hover({ data, func }) {
    return (
        <div>
            this is hover component
            <button onMouseOver={() => func()}>hover{data}</button>
        </div>
    )
}

export default Higherorder(Hover)