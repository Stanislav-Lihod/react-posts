import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/about" className="navbar__link">About us</Link>
      <Link to="/posts" className="navbar__link">Posts</Link>
    </div>
  )
}
