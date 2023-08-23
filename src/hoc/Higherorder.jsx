import React, { useState } from 'react'

const Higherorder = (WrappedComponent) => {
    function Newcomponent() {
        const [data, Setdata] = useState(0)
        return <WrappedComponent data={data} func={() => Setdata(data + 1)}></WrappedComponent>
    }
    return Newcomponent
}

export default Higherorder