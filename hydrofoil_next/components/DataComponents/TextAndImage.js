import React, {useEffect} from "react";
import Image from "next/image";

function TextAndImage( {element} ) {
    
    
    if(element.__component == "components.zig-zag"){

    
        return(
            <>
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            {(element.description == null || element.description == "") && (
                                <>
                                    <p className="text-[40px] lg:text-[45px] xl:text-[45px] font-bold leading-tight mt-5 sm:mt-0 text-blue-600">
                                        {element.title}
				                    </p>
                                </>
                            )}
                            {((element.description != null && element.description != "")) && (
                                <> 
                                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">{element.title}</h2>
                                    <p className="mb-4">{element.description}</p>
                                </>
                            )}
                            {((element.link != null) &&
                                <> 
                                    <a href={element.link.url} className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                        {element.link.caption}
                                        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    </a>
                                </>
                            )}                          
                        </div>
                        <div className={element.changeLayout ? 'grid grid-cols-1 mt-8 -order-1 shadow-xl rounded-lg' : 'grid grid-cols-1 mt-8 shadow-xl rounded-lg'}>
                            <Image
                                className="mt-4 w-full lg:mt-10 rounded-lg"
                                src = {process.env.IMAGES_STRAPI_URL + element.image.data.attributes.url}
                                alt = "image"
                                layout="responsive"
                                width={(element.image.data.attributes.width == null) ? "400px" : element.image.data.attributes.width}
                                height={(element.image.data.attributes.height == null) ? "267px" : element.image.data.attributes.height}
                            />
                        </div>
                    </div>
                </section>

            </>
        );

    }

    return(
        <>
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {(element.description == null || element.description == "") && (
                        <>
                            <p className="text-[40px] lg:text-[45px] xl:text-[45px] font-bold leading-tight mt-5 sm:mt-0 text-blue-400">
                                {element.title}
                            </p>
                        </>
                    )}
                    {((element.description != null && element.description != "")) && (
                        <> 
                            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">{element.title}</h2>
                            <p className="mb-4">{element.description}</p>
                        </>
                    )}
                    {((element.link != null) &&
                    <> 
                        <a href={element.link.url} className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            {element.link.caption}
                            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        </a>
                    </>
                    )}                          
                </div>
                <div className={element.changeLayout ? 'grid grid-cols-1 mt-8 -order-1' : 'grid grid-cols-1 mt-8'}>
                    {((element.youtube_url != null && element.youtube_url != "") &&
                    <>
                        <iframe class="w-full aspect-video" src={element.youtube_url}></iframe>
                    </>
                    )}
                    {((element.videos.data != null) &&
                    <>
                    <video controls className="h-full w-full object-cover">
                    <source src={process.env.IMAGES_STRAPI_URL + element.videos.data[0].attributes.url} type="video/mp4" />
                    </video>
                    </>
                    )}                
                </div>
            </div>
        </section>

    </>
    );

}

export default TextAndImage