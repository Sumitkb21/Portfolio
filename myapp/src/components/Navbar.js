import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import './navbar.css'


export default function Navbar(){
  return (
  
    <div className='navbar'>
      
     <div id='logo'>
      <NavLink to='/'> <img src={logo} alt="Button Name" className="img" /> </NavLink>
     </div>

     <div className='middle'>
      <NavLink className='middle_item' aria-current="page" to='/'> Home </NavLink>
      <NavLink className='middle_item' to='/portfolio'> Portfolio </NavLink>
      <NavLink className='middle_item' to='/education'> Education </NavLink>
     </div>
     <div className='con'>
      <NavLink className='contact' to='/contact'> Contact_Me </NavLink>
     </div>

   
    </div>

    
  )
}


