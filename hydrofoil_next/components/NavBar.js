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
          width="100px"
          height="90px"
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

	const [dropdown1, setDropdown1] = React.useState(false);
	const [dropdown2, setDropdown2] = React.useState(false);

	const [showMobile, setShowMobile] = React.useState(false);

	return(
		<>
			<nav className="bg-gray-100 sticky top-0 z-20">
				<div className="px-7 mx-auto">
					<div className="flex justify-between">

						<div className="flex space-x-4">
							{/*logo*/}
							<div>
								<Link href="/" legacyBehavior>
								<a href="#" className="flex items-center py-4 px-2 text-gray-700">
									<Logo />
									<span className="text-black text-xl sm:text-2xl mr-4 font-semibold">Adria<span className="text-sky-500 hover:text-sky-600">Hydrofoil</span></span>
								</a>
								</Link>
							</div>
							{/*primary nav*/}
							<div className="hidden lg:block items-center space-x-1">
							<ul className="flex flex-col p-4 mt-4 md:flex-row items-baseline space-x-2">
								
								<li>
									<button onClick={() => setDropdown1(!dropdown1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">News <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
									{dropdown1 && (
									<div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
										<ul className="py-1 text-sm text-gray-700 dark:text-gray-400">
											<Link href="/posts" legacyBehavior>
											<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</a>
											</li>
											</Link>
											<Link href="/media" legacyBehavior>
											<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Media</a>
											</li>
											</Link>
											<Link href="/professional-articles" legacyBehavior>
											<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Articles</a>
											</li>
											</Link>
										</ul>
									</div>
									)}
								</li>
								<li>
									<button onClick={() => setDropdown2(!dropdown2)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Projects <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
									{dropdown2 && (
									<div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
										<ul className="py-1 text-sm text-gray-700 dark:text-gray-400">
											<Link href="/teredo-navalis" legacyBehavior>
											<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Teredo Navalis</a>
											</li>
											</Link>
											<Link href="/delta-one" legacyBehavior>
											<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delta One</a>
											</li>
											</Link>
											<Link href="/hydro-contest" legacyBehavior>
											<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">HydroContest</a>
											</li>
											</Link>
										</ul>
									</div>
									)}
								</li>
								<Link href="/open-source" legacyBehavior><li><a href="#" className="block py-4 px-3 text-gray-700 hover:text-black text-base">Open Source</a></li></Link>
								<Link href="/partners" legacyBehavior><li><a href="#" className="block py-4 px-3 text-gray-700 hover:text-black text-base">Partners</a></li></Link>
							</ul>
							</div>
							
						</div>

						

						{/*secondary nav*/}
						<div className="hidden lg:flex items-center space-x-1">
							<Link href="/about-us" legacyBehavior><a href="#" className="py-4 px-3" text-lg>About us</a></Link>
							<Link href="/contact" legacyBehavior><a href="#" className="py-3 px-3 bg-blue-300 hover:bg-blue-200 
							text-blue-800 rounded hover:text-blue-700 transition duration-300 text-lg">Contact us</a></Link>
						
						</div>

						{/*mobile button goes here*/}
						<div className="lg:hidden flex items-center">
							<button onClick={() => setShowMobile(!showMobile)}>
								<svg class="w-12 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</button>
						</div>

					</div>
				</div>

				{/*mobile menu
				<div className={showMobile ? "not-hidden md:hidden" : "hidden"}>
					<a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
					<a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
				</div>
				*/}
			</nav>

			
			<div className={showMobile ? "navbar-menu relative z-50 not-hidden" : "hidden"}>
				<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
					<div className="flex items-center mb-8">
						<a className="mr-auto text-3xl font-bold leading-none" href="#">
							<Logo />
						</a>
						<button class="navbar-close" onClick={() => setShowMobile(!showMobile)}>
							<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div>
						<ul>
							<li className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
							</li>
							<li className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
							</li>
							<li className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
							</li>
							<li className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
							</li>
							<li className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div className="mt-auto">
						<div className="pt-6">
							<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
							<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
						</div>
						<p className="my-4 text-xs text-center text-gray-400">
							<span>Copyright © 2022</span>
						</p>
					</div>
				</nav>
			</div>


		</>
	);
  
}

export default NavBar;
