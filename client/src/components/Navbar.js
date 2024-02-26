import React from 'react'

function Navbar() {
  return (
    <div>
      <div >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            
          </div>
    </div>
  )
}

export default Navbar
