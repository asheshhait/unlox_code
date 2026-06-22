import "../css/Navbar.css"
import React from 'react'
import { Form, Link } from 'react-router-dom'



export default function NavBar() {
  return (
    <div className='navbar'>
        <div className='navbar-brand'>
            <Link to='/' className='nav-link'>Movie App</Link>
        </div>
        <div className='navbar-brand'>
            <Link to='/' className='nav-link'>home</Link>
            <Link to='/favourate' className='nav-link'>favourate</Link>
        </div>
    </div>
  )
}
