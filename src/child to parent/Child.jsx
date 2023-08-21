import React, { useState } from 'react'
import Inner from './Inner'

function Child() {
    const [data, setdata] = useState(0)
    function call(e) {
        setdata(e)
    }
    console.log("child")
    return (
        <div>
            parent {data}
            <Inner call={call}></Inner>

        </div>
    )
}

export default Child