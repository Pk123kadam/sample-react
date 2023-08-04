import React from 'react'
import { useRef } from 'react'

function Ref() {
    const ref = useRef()
    const ref2 = useRef()
  return (
    <div>
          <form onSubmit={(e)=>{
            e.preventDefault()
            let a = ref.current.value
            let b = ref2.current.value
           console.log(a,b)

          }}>
          
            <label>Email:</label>
            <input type='email'name='email' ref={ref}></input>
            <input type='password'name='password' ref={ref2}></input>
           
            <button type='submit'>Submit</button>
        </form>
      
       
      
    </div>
  )
}

export default Ref
