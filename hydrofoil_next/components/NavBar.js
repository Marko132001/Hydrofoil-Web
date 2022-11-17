import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hydrofoil_logo from '../images/hydrofoil_logo.png';
import Dropdown from './Dropdown';
import Link from 'next/link';


const Logo = () => {
  return <Image
          className="logo" 
          src = {hydrofoil_logo}
          alt = "hydrofoil logo"
          width="112px"
          height="100px"
          />
}


/*
function NavBar( {navItems} ) {


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


  const [dropdown, setDropdown] = React.useState(false);


  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <>
      <nav className={navBar ? 'navbar active' : 'navbar'}>
        <Link href="/" className="navbar-logo">
          <h3 className="title">Adria<span className="subword">Hydrofoil</span></h3>
        </Link>
        <ul className={`nav-items ${isOpen && "open"}`}>
          {navItems.data.map((item) => {
            if (item.attributes.title === "Projects") {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a href={item.attributes.url}>{item.attributes.title}</a>
                  {dropdown && <Dropdown nav={item.attributes.submenu}/>}
                </li>
              );
            }
            
            
            return (
              <li key={item.id} className="nav-item">
                <a href={item.attributes.url}>{item.attributes.title}</a>
              </li>
            );
            

          })}
        </ul>
        <div className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
        <Logo />
      </nav>
    </>
  );

}

export default NavBar;
*/

function NavBar( {navItems} ) {


	const [showMobile, setShowMobile] = React.useState(false);

	return(
		<>
			<nav className="bg-gray-100">
				<div className="px-7 mx-auto">
					<div className="flex justify-between">

						<div className="flex space-x-4">
							{/*logo*/}
							<div>
								<a href="#" className="flex items-center py-4 px-2 text-gray-700">
									<Logo />
									<span className="text-black text-xl sm:text-2xl mr-4 font-semibold">Adria<span className="text-sky-500 hover:text-sky-600">Hydrofoil</span></span>
								</a>
							</div>
							{/*primary nav*/}
							<div className="hidden md:flex items-center space-x-1">
								<a href="#" className="py-4 px-3 text-gray-700 hover:text-black text-lg">Features</a>
								<a href="#" className="py-4 px-3 text-gray-700 hover:text-black text-lg">Pricing</a>
							</div>
						</div>


						{/*secondary nav*/}
						<div className="hidden md:flex items-center space-x-1">
							<a href="#" className="py-4 px-3" text-lg>Login</a>
							<a href="#" className="py-3 px-3 bg-blue-300 hover:bg-blue-200 
							text-blue-800 rounded hover:text-blue-700 transition duration-300 text-lg">Signup</a>
						
						</div>

						{/*mobile button goes here*/}
						<div className="md:hidden flex items-center">
							<button onClick={() => setShowMobile(!showMobile)}>
								<svg class="w-12 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</button>
						</div>

					</div>
				</div>

				{/*mobile menu*/}
				<div className={showMobile ? "not-hidden md:hidden" : "hidden"}>
					<a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
					<a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
