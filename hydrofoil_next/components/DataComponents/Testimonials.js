import React from "react";
import Image from "next/image";
import burza_nautike from "../../images/burza_nautike_naslovna.jpg";
import rtl from "../../images/rtl.jpg";
import studentski from "../../images/studentski_naslovna.jpeg";
import novi_list from "../../images/header.jpg";
import riportal from "../../images/riportal.jpg";
import vecernji from "../../images/vecernji.jpeg";

function Testimonials({t}){

    


    return(
        <>
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mt-9">
                {t("home:testimonials_title")}
            </h1>
			<div className="w-full mb-4">
				<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
            <div className="container mx-auto bg-white p-4 lg:p-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 className="mt-4 text-3xl font-semibold text-slate-800">BURZA NAUTIKE</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t("home:burza_nautike")}
                        </p>
                        <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={burza_nautike}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 className="mt-4 text-3xl font-semibold text-slate-800">RTL</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t("home:rtl")}
                        </p>
                        <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={rtl}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 className="mt-4 text-3xl font-semibold text-slate-800">STUDENTSKI.HR</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t("home:studentski_hr")}
                        </p>
                        <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={studentski}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 className="mt-4 text-3xl font-semibold text-slate-800">NOVI LIST</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t("home:novi_list")}
                        </p>
                        <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={novi_list}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 className="mt-4 text-3xl font-semibold text-slate-800">RI PORTAL</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t("home:ri_portal")}
                        </p>
                        <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={riportal}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 className="mt-4 text-3xl font-semibold text-slate-800">VEČERNJI LIST</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t("home:vecernji_list")}
                        </p>
                        <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={vecernji}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>        
        </>
    );
}

export default Testimonials;