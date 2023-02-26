import React from 'react';

function HeroSection( {element} ) {


  if(element.__component == "components.hero-section-video"){

    return (
		<>
			<div className="relative overflow-hidden bg-no-repeat bg-cover">
				<div className="">
            	<video autoPlay loop muted src={process.env.IMAGES_STRAPI_URL + element.video.data.attributes.url} />
          		</div>
				<div
				className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
				style={{backgroundColor: "rgba(0, 0, 0, 0.55)"}}
				>
					<div className="flex justify-center items-center h-full">
						<div className="text-center text-white px-6 md:px-12">
							<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
							{element.title}
							</h1>

						</div>
					</div>
				</div>
			</div>
		</>
      );
  }

  return (
		<>
			<div
				className="relative overflow-hidden bg-no-repeat bg-cover"
				style={{
				backgroundPosition: "50%",
				backgroundImage: `url(${process.env.IMAGES_STRAPI_URL + element.image.data.attributes.url})`,
				height: "600px",
				}}
			>
				<div
				className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
				style={{backgroundColor: "rgba(0, 0, 0, 0.55)"}}
				>
					<div className="flex justify-center items-center h-full">
						<div className="text-center text-white px-6 md:px-12">
							<h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight">
							{element.title}
							</h1>
							<p className="mt-3 text-lg leading-relaxed text-slate-300">{element.subtitle}</p>
						</div>
					</div>
				</div>
			</div>
		</>
  )
  
}

export default HeroSection