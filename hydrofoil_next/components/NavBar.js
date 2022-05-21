import React from 'react'
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
  return (
    <header class="navBar">
        <h3><a href="#" class="title">Adria<h3 class="subword">Hydrofoil</h3></a></h3>
        <nav>
          <ul class="nav__links">
            <li><a href="#">News</a></li>
            <li><a href="#">Vessel</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
        <Logo />
    </header>
  )
}

export default NavBar