import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <h1><img src={logo} alt='logo' /></h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New & Popular</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Browse by Languages</a></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt='search_icon' className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt='bell_icon' className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt='profile_img' className='profile' />
          <img src={caret_icon} alt='dropdown_icon' />
          <div className="dropdown">
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
