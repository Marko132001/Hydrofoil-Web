import React from "react";
import Image from 'next/image';

function FeaturesSection( {element} ){

    return(
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"><span class="underline decoration-blue-500">{element.title}</span></h1>
                    
                    <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        {element.subtitle}
                    </p>
                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {element.features.map((feature) => {

                        return(
                            
                                <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                    <span class="inline-block text-blue-500 dark:text-blue-400">
                                        <Image
                                            src = {feature.svg.data.attributes.url}
                                            alt = "image"
                                            width="32px"
                                            height="32px"
                                        />
                                    </span>

                                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{feature.title}</h1>

                                    <p class="text-gray-500 dark:text-gray-300">
                                        {feature.description}
                                    </p>
                                </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        </>
    );

}

export default FeaturesSection;