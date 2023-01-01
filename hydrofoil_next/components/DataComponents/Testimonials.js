import React from "react";
import Image from "next/image";
import burza_nautike from "../../images/burza_nautike_naslovna.jpg";
import rtl from "../../images/rtl.jpg";
import studentski from "../../images/studentski_naslovna.jpeg";
import novi_list from "../../images/header.jpg";
import riportal from "../../images/riportal.jpg";
import vecernji from "../../images/vecernji.jpeg";

function Testimonials(){

    


    return(
        <>
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mt-9">
                Naš uspjeh je prepoznat od strane raznih medija
            </h1>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
            <div class="container mx-auto bg-white p-4 lg:p-12">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 class="mt-4 text-3xl font-semibold text-slate-800">BURZA NAUTIKE</h2>
                        <p class="mt-4 text-lg text-slate-600">
                            "U teškim danima za hrvatsku brodograđevnu industriju, ovo je
                            pozitivni primjer da trudom i znanjem mladih u Hrvatskoj se
                            može puno postići te da za hrvatsku brodogradnju ima šanse."
                        </p>
                        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={burza_nautike}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 class="mt-4 text-3xl font-semibold text-slate-800">RTL</h2>
                        <p class="mt-4 text-lg text-slate-600">
                            "A treba ih bodriti. Ovo su dečki o kojima će se još govoriti."
                        </p>
                        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={rtl}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 class="mt-4 text-3xl font-semibold text-slate-800">STUDENTSKI.HR</h2>
                        <p class="mt-4 text-lg text-slate-600">
                            "Čestitamo ekipi na postignutom uspjehu i nadamo se da neće biti posljednji
                            tako velikoga razmjera."
                        </p>
                        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={studentski}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 class="mt-4 text-3xl font-semibold text-slate-800">NOVI LIST</h2>
                        <p class="mt-4 text-lg text-slate-600">
                            "Iza plovila stoji godinu dana predanog rada."
                        </p>
                        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={novi_list}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 class="mt-4 text-3xl font-semibold text-slate-800">RI PORTAL</h2>
                        <p class="mt-4 text-lg text-slate-600">
                            "U teškim danima za hrvatsku brodograđevnu industriju, imamo i svijetli primjer
                            da trudom i znanjem mladih u Hrvatskoj možemo puno postići."
                        </p>
                        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                            <div className="w-[400px] h-auto">
                            <Image 
                                src={riportal}
                                alt="slika"
                            />
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">          
                        <h2 class="mt-4 text-3xl font-semibold text-slate-800">VEČERNJI LIST</h2>
                        <p class="mt-4 text-lg text-slate-600">
                            "Naša regija je fenomen"
                        </p>
                        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
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