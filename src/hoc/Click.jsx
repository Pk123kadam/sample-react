import React from 'react'
import Higherorder from './Higherorder'

function Click({ data, func }) {
    return (
        <div>
            <button onClick={() => func()}>Click{data}</button>


        </div>
    )
}

export default Higherorder(Click)