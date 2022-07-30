import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import hydrofoil_logo from '../images/hydrofoil_logo.png'

const Logo = (props) => {
  return <Image
          class="logo" 
          src = {hydrofoil_logo}
          alt = "hydrofoil logo"
          width="112px"
          height="102px" 
          />
}


function NavBar() {
  
  const [navBar, setNavBar] = React.useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 20) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);
  

  return (
    <header className={navBar ? 'navBar active' : 'navBar'}>
        <h3><a href="/" class="title">Adria<h3 class="subword">Hydrofoil</h3></a></h3>
        <nav>
          <ul className="nav__links">
            <li><a href="/posts">News</a></li>
            <li><a href="#">Vessel</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
        <Logo />
    </header>

  )
}

export default NavBar