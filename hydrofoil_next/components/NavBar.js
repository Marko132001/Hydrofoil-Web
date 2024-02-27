import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import uptz_text from '../images/uptz_text-remove.png';
import uptz_logo from '../images/hydrofoil_logo2.jpg';
import cro_flag from '../images/flag-for-croatia-svgrepo-com.svg';
import eng_flag from '../images/united-kingdom-svgrepo-com.svg';
import Link from 'next/link';
import { useRouter } from "next/router";
import { links } from "./MyLinks";

const Logo = () => {
  return <Image
          className="rounded-full mix-blend-darken" 
          src = {uptz_logo}
          alt = "hydrofoil logo"
          width="90px"
          height="90px"
          />
}

const LogoText = () => {
	return <Image
			src = {uptz_text}
			alt = "uptz text"
			width="184px"
			height="87px"
			/>
}


function NavBar( {t} ) {

	const router = useRouter();

	const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

	const [showMobile, setShowMobile] = React.useState(false);
	

	return(
		<>
			<nav className="bg-gray-100 sticky top-0 z-20">
				<div className="px-7 mx-auto">
					<div className="flex justify-between">

						<div className="flex space-x-4">
							{/*logo*/}
							<div>
								<Link href="/">
								<a href="#" className="flex items-center py-2 px-4 text-gray-700">
									<Logo />
									{/*<span className="text-black text-xl sm:text-2xl mr-4 font-semibold">Adria<span className="text-sky-500 hover:text-sky-600">Hydrofoil</span></span>*/}
									<span className="ml-4 mr-4 mt-3"><LogoText /></span>
								</a>
								</Link>
							</div>
							{/*primary nav*/}
							<div className="hidden lg:block items-center space-x-1">
							<ul className="flex flex-col p-4 mt-4 md:flex-row items-baseline space-x-2">
							{links.map((link, index) => (
								<div key={index}>
									<div className="text-left md:cursor-pointer group">
									<li className={`${showMobile ? "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}`} type="button"
										onClick={() => {
											heading !== link.name ? setHeading(link.name) : setHeading("");
											setSubHeading("");
										}}
										>
										{t(link.name)}
										{!showMobile && <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
										</li>
										{link.submenu && (
										<div>
											<div className="absolute top-20 hidden group-hover:lg:block hover:lg:block">
											<div className="py-3">
												<div
												className="w-4 h-4 left-3 absolute 
												mt-1 bg-blue-700 rotate-45"
												></div>
											</div>
											<div className="bg-blue-200 p-5 grid grid-cols-3 gap-10 rounded-lg">
												{link.sublinks.map((mysublinks, index) => (
												<div key={index}>
													<h1 className="text-lg font-semibold">
													{t(mysublinks.Head)}
													</h1>
													{mysublinks.sublink.map((slink, index) => (
													<li key={index} className="text-sm text-gray-600 my-2.5 hover:text-blue-800">
														<Link
														href={slink.link}
														className="hover:text-primary"
														>
														{t(slink.name)}
														</Link>
													</li>
													))}
												</div>
												))}
											</div>
											</div>
										</div>
										)}
									</div>
									{/* Mobile menus */}
									<div
										className={`
										${heading === link.name ? "lg:hidden" : "hidden"}
									`}
									>
										{/* sublinks */}
										{link.sublinks.map((slinks, index) => (
										<div key={index}>
											<div>
											<h1
												onClick={() =>
												subHeading !== slinks.Head
													? setSubHeading(slinks.Head)
													: setSubHeading("")
												}
												className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
											>
												{t(slinks.Head)}
											</h1>
											<div
												className={`${
												subHeading === slinks.Head ? "lg:hidden" : "hidden"
												}`}
											>
												{slinks.sublink.map((slink, index) => (
												<li key={index} className="py-3 pl-14">
													<Link href={slink.link}>{t(slink.name)}</Link>
												</li>
												))}
											</div>
											</div>
										</div>
										))}
									</div>
								</div>
								))}																	
								<Link href="/open-source"><li><a href="#" className="block py-4 px-3 text-gray-700 hover:text-black text-base">Open Source</a></li></Link>
								<Link href="/partners"><li><a href="#" className="block py-4 px-3 text-gray-700 hover:text-black text-base">{t("navbar:partners")}</a></li></Link>
							</ul>
							
							</div>			
						</div>
						
						

						{/*secondary nav*/}
						<div className="hidden lg:flex items-center space-x-1">
							<Link href={router.asPath} locale={"en"}>
								<a href="#" className={router.locale === "hr" ? `py-4 px-3 text-lg` : `py-4 px-3 text-lg opacity-40`}>
									<Image
									src = {eng_flag}
									alt = "image"
									width="32px"
									height="32px"
									/>
								</a>
							</Link>
							<Link href={router.asPath} locale={"hr"}>
								<a href="#" className={router.locale === "en" ? `py-4 px-3 text-lg` : `py-4 px-3 text-lg opacity-40`}>
									<Image
									src = {cro_flag}
									alt = "image"
									width="32px"
									height="32px"
									/>
								</a>
							</Link>
							<Link href="/about-us"><a href="#" className="py-4 px-3 text-lg">{t("navbar:about-us")}</a></Link>
							<Link href="/contact"><a href="#" className="py-3 px-3 bg-blue-300 hover:bg-blue-200 
							text-blue-800 rounded hover:text-blue-700 transition duration-300 text-lg">{t("navbar:contact")}</a></Link>
							
						</div>

						{/*mobile button goes here*/}
						<div className="lg:hidden flex items-center">
							<button onClick={() => setShowMobile(!showMobile)}>
								<svg className="w-12 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</button>
						</div>

					</div>
				</div>
			</nav>

			
			<div className={showMobile ? "navbar-menu relative z-50 not-hidden" : "hidden"}>
				<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
					<div className="flex items-center mb-8">
						<Link href="/">
						<a className="mr-auto text-3xl font-bold leading-none" href="#">
							<Logo />
						</a>
						</Link>
						<button className="navbar-close" onClick={() => setShowMobile(!showMobile)}>
							<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div>
						<ul>
						{links.map((link, index) => (
							<div key={index}>
								<div className="text-left md:cursor-pointer group">
								<li className={`${showMobile ? "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}`} type="button"
									onClick={() => {
										heading !== link.name ? setHeading(link.name) : setHeading("");
										setSubHeading("");
									}}
									>
									{t(link.name)}
									{!showMobile && <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
									</li>
									{link.submenu && (
									<div>
										<div className="absolute top-20 hidden group-hover:lg:block hover:lg:block">
										<div className="py-3">
											<div
											className="w-4 h-4 left-3 absolute 
											mt-1 bg-blue-700 rotate-45"
											></div>
										</div>
										<div className="bg-blue-200 p-5 grid grid-cols-3 gap-10 rounded-lg">
											{link.sublinks.map((mysublinks, index) => (
											<div key={index}>
												<h1 className="text-lg font-semibold">
												{t(mysublinks.Head)}
												</h1>
												{mysublinks.sublink.map((slink, index) => (
												<li key={index} className="text-sm text-gray-600 my-2.5 hover:text-blue-800">
													<Link
													href={slink.link}
													className="hover:text-primary"
													>
													{t(slink.name)}
													</Link>
												</li>
												))}
											</div>
											))}
										</div>
										</div>
									</div>
									)}
								</div>
								{/* Mobile menus */}
								<div
									className={`
									${heading === link.name ? "lg:hidden" : "hidden"}
								`}
								>
									{/* sublinks */}
									{link.sublinks.map((slinks, index) => (
									<div key={index}>
										<div>
										<h1
											onClick={() =>
											subHeading !== slinks.Head
												? setSubHeading(slinks.Head)
												: setSubHeading("")
											}
											className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
										>
											{t(slinks.Head)}

										</h1>
										<div
											className={`${
											subHeading === slinks.Head ? "lg:hidden" : "hidden"
											}`}
										>
											{slinks.sublink.map((slink, index) => (
											<li key={index} className="py-3 pl-14">
												<Link href={slink.link}>{t(slink.name)}</Link>
											</li>
											))}
										</div>
										</div>
									</div>
									))}
								</div>
							</div>
							))}
							<li className="mb-1">
								<Link href="/partners"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">{t("navbar:partners")}</a></Link>
							</li>
							<li className="mb-1">
								<Link href="/open-source"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Open Source</a></Link>
							</li>
						</ul>
					</div>
					<div className="mt-auto">
						<div className="pt-6">
							<Link href={router.asPath} locale={"en"}>
								<a href="#" className={router.locale === "hr" ? `py-4 px-3 text-lg` : `py-4 px-3 text-lg opacity-40`}>
									<Image
									src = {eng_flag}
									alt = "image"
									width="32px"
									height="32px"
									/>
								</a>
							</Link>
							<Link href={router.asPath} locale={"hr"}>
								<a href="#" className={router.locale === "en" ? `py-4 px-3 text-lg` : `py-4 px-3 text-lg opacity-40`}>
									<Image
									src = {cro_flag}
									alt = "image"
									width="32px"
									height="32px"
									/>
								</a>
							</Link>
							<Link href="/about-us"><a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">{t("navbar:about-us")}</a></Link>
							<Link href="/contact"><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">{t("navbar:contact")}</a></Link>
						</div>

					</div>
				</nav>
			</div>


		</>
	);
  
}

export default NavBar;
