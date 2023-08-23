import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ state }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/"><button className='btn'>Home</button></Link>

                <Link to="/login"><button className='btn'>login</button></Link>
                <Link to="/dash"><button className='btn'>Dashbaord</button></Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
