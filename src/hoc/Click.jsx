import React from 'react'
import Higherorder from './Higherorder'

function Click({ data, func }) {
    return (
        <div>
            this is click component.
            <button onClick={() => func()}>Click{data}</button>
        </div>
    )
}

export default Higherorder(Click)