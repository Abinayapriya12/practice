import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <h2>Grony</h2>
    <ul>
      <Link to="/login">Login</Link>{" "}
      <Link to="/register/">Register</Link>
    </ul>
    </nav>
  )
}

export default Navbar 