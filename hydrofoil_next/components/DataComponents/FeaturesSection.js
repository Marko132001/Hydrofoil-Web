import React from "react";
import Image from 'next/image';

function FeaturesSection( {element} ){

    return(
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"><span className="underline decoration-blue-500">{element.title}</span></h1>
                    
                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        {element.subtitle}
                    </p>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {element.features.map((feature, index) => {

                        return(
                            
                                <div key={index} className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                    <span className="inline-block text-blue-500 dark:text-blue-400">
                                        <Image
                                            src = {feature.svg.data.attributes.url}
                                            alt = "image"
                                            width="32px"
                                            height="32px"
                                        />
                                    </span>

                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{feature.title}</h1>

                                    <p className="text-gray-500 dark:text-gray-300">
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