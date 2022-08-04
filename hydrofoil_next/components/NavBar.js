import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import hydrofoil_logo from '../images/hydrofoil_logo.png'


const Logo = (props) => {
  return <Image
          className="logo" 
          src = {hydrofoil_logo}
          alt = "hydrofoil logo"
          width="112px"
          height="100px" 
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
  

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={navBar ? 'navBar active' : 'navBar'}>
        <h3><a href="/" className="title">Adria<h3 className="subword">Hydrofoil</h3></a></h3>
        <div className={`nav__links ${isOpen && "open"}`}>
          <a href="/posts">News</a>
          <a href="/teredo-navalis">Projects</a>
          <a href="#">About us</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>

        <Logo />
    </header>

  );
}

export default NavBar