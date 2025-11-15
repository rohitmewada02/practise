import React, { useState } from 'react'
import logo_black from './../assets/logo-black.png';
import logo_white from './../assets/logo-white.png';
import search_light from './../assets/search-w.png';
import search_dard from './../assets/search-b.png';
import toggle_night from './../assets/night.png';
import toggle_day from './../assets/day.png';

function Navbar({theme,setTheme}) {

  

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark'): setTheme('light')
  }
    return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_white :logo_black} className='logo' />

      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Feature</li>
        <li>About</li>

      </ul>  

      <div className='search-box'>
            <input type='text' placeholder='Search' />
            <img src={theme=='light' ? search_light : search_dard} />

      </div>

      <img src={theme=='light' ? toggle_day :toggle_night} onClick={() => {toggle_mode()}} className='toggle-icon' />
      
    </div>
  )
}

export default Navbar
