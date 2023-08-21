import React, { useEffect, useState } from 'react'


function Clean() {
    let [count, setcount] = useState(0)
    // useEffect(() => {
    //     let fun = () => {
    //         console.log("clicked")
    //     }
    //     window.addEventListener("click", fun)




    // }, [count])
    return (
        <div>

            <button onClick={() => setcount(count++)}>count{count}</button>



        </div>
    )
}

export default Clean