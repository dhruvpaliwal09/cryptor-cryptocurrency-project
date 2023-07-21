import React from 'react'
import {FaConnectdevelop} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Link to='/'>
    <div>
    <div className='navbar'>
    <FaConnectdevelop className='icon'/> 
    <h1> CRYPTOR</h1>
 </div>
    </div>
      </Link>
  )
}

export default NavBar