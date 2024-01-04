import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function VideoCard( {element} ){

    return(
        <div className="gap-16 items-center my-8 mx-8 max-w-screen-xl 2xl:mx-auto md:py-16 md:px-6 lg:grid lg:grid-cols-12 lg:py-16 lg:px-6">
            <div className="col-span-12 lg:col-span-5 xl:col-span-7">
                <p className="mb-3 text-lg font-semibold uppercase leading-snug tracking-wide text-blue-600">
                {element.category}
                </p>
                <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 xl:text-6xl">
                {element.title}
                </h2>
                <p className="mb-6 text-lg font-medium leading-6 text-gray-500 xl:text-xl xl:leading-8">
                {element.content}
                </p>
                {(element.link!=null && element.link.url!=null) &&
                <Link passHref href={element.link.url}>
                <a
                href="#"
                className="text-xl font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline xl:text-2xl"
                >
                {element.link.caption}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 inline-flex h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
                </a>
                </Link>
                }
            </div>
            <div className={`col-span-9 lg:col-span-7 xl:col-span-5 ${element.left && 'order-first'}`}>
                <div className="mt-4 h-full -translate-x-4 -rotate-2 rounded-3xl bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 p-4">
                <div className="h-full translate-x-4 rotate-6 overflow-hidden rounded-3xl shadow-lg transition-transform hover:scale-125">
                    {(element.media.data.attributes.ext == ".jpg" || element.media.data.attributes.ext == ".png")
                        &&
                        (
                            <video autoPlay muted loop className="h-full w-full object-cover" poster={process.env.IMAGES_STRAPI_URL + element.media.data.attributes.url}>
                            
                            </video>
                        )
                    }
                    {    
                        element.media.data.attributes.ext == ".mp4"
                        &&
                        (
                            <video autoPlay muted loop className="h-full w-full object-cover">
                            <source src={process.env.IMAGES_STRAPI_URL + element.media.data.attributes.url} type="video/mp4" />
                            </video>
                        )

                    }
                    
                </div>
                </div>
            </div>
        </div>
    
    );

}

export default VideoCard;