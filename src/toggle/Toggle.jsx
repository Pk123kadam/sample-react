import React, { useState } from 'react'

function Toggle() {
    const[state,setstate] = useState(false)
  return (
    <div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{ setstate(!state)}}/>
  <label className="form-check-label"></label>
</div>
{state ? "ON" : "OFF"}
<div style={{width:"500px", height:"500px"}} className={state ? "bg-dark" : "bg-primary"}>

</div>

      
    </div>
  ) 
}

export default Toggle
