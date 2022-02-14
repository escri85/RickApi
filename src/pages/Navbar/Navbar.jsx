import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
    <NavLink to="/login">login</NavLink>
    <NavLink to="/personajes">personajes</NavLink>
    {/* <NavLink to="/carrito"><FontAwesomeIcon icon={faShoppingCart} /></NavLink> */}
  </div>
  )
}

export default Navbar