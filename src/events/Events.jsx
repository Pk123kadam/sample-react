import React from 'react'

function Event() {
  return (
    <div>
        <form>
            <label>Name:</label>
            <input type='text'></input>
            <label>Email:</label>
            <input type='email'></input>
            <label>Password:</label>
            <input type='password'></input>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Event
