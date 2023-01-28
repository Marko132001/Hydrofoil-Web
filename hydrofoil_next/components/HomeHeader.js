import React from 'react';
import Image from 'next/image';
import header from '../images/header.jpg';

const Header = () => {
	return <Image
			  className="header" 
			  src = {header}
			  alt = "hydrofoil header"
			  width="560px"
			  height="400px"
			  />
 }


function HomeHeader({t}) {

	return(
	<>
		<div className="relative pt-10 sm:pt-0 px-3 pb-28">
 
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
			<div className="content">
				<div className="flex items-center gap-3">
					<hr className="w-10 bg-blue-500 border "/>
					<span className="md:text-[18px] font-medium text-gray-800 ">
						Adria Hydrofoil 
					</span>
				</div>
				<p className="text-[37px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0">
					THE MAIN <span className="text-blue-500">PROJECT</span> <br />
					OF THE <span className="text-blue-500">ASSOCIATION</span> 
				</p>
				<p className="mt-5 md:text-md ">
					{t("home:home_header")}
				</p>

			
				</div>
				<div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
					<Header />
				</div>
			</div>
		</div>
	</>
	);
}

export default HomeHeader