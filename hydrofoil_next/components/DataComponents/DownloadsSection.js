import React from 'react';

function DownloadsSection({t}) {

        return(
            <>
            <section class="flex items-center min-h-screen justify-center">
            <section
                class="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/hydrofoilweb/image/upload/v1673015864/i_w_Kx_FVPZ_X2_b2c199dc92_6d2f769746.jpg")`, height:"100vh",
                }}>
                <div class="mx-3 px-1 py-10 max-w-[43rem]   rounded-xl bg-blue-300 bg-opacity-50 shadow-lg backdrop-blur-md">
                    <div class="text-center">
                    <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Open Source</h1>
                    <p class="mt-3 text-lg leading-relaxed text-gray-800">
                    {t("open-source:text")}
                    </p>
                    </div>
                </div>
                </section>
            </section>
            <div class="antialiased w-full h-full text-gray-400 font-inter">

                <div className="relative overflow-hidden bg-no-repeat bg-cover" 
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/hydrofoilweb/image/upload/v1673015882/IMG_6364_scaled_54faa91fb9_fa5b918f71.jpg")`,backgroundSize:"cover", backgroundPosition:"bottom", height:"100vh", 
                }}
                >
                <div class="container px-4 mx-auto">
                <div>
                    
                    <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
                    >
                    <div
                        id="plan"
                        class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 hover:backdrop-blur-sm transition duration-200 ease-in"
                    >
                        <div id="title" class="w-full py-5 border-b-2 border-blue-400">
                        <h2 class="font-bold text-3xl text-white">{t("open-source:card_title")}</h2>

                        </div>
                        <div id="content" class="">
                        <div id="icon" class="my-5">
                            <p class="text-gray-200 text-sm pt-2">
                            {t("open-source:author_selec")}
                            </p>
                        </div>
                        <div id="contain" class="leading-8 mb-10 text-lg font-light text-gray-50">
                            <ul>
                            <li>Mid drive vs Hub drive</li>
                            <li>BLDC motor</li>
                            <li>{t("open-source:bicikla_baterija")}</li>
                            </ul>
                            <div id="choose" class="w-full mt-10 px-6">
                            <a
                                href="https://drive.google.com/file/d/1tFhgbGCFRLFPlKbMMS8PxoROlkYms1uh/view?usp=share_link"
                                class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                                >Download</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </>
        );

  
}

export default DownloadsSection;