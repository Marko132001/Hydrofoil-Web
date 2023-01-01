import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Timeline from './DataComponents/Timeline';


function HomeLatestPosts( {posts} ) {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.data.slice(-4));
    }, [posts.data]);

    function renderPostPreviews(){
        return( 
        <main class="py-12 md:px-20 sm:px-14 px-6">
            <div class="sm:flex items-center shadow-md">
                <div class="md:px-10 sm:px-5 px-5">
                <h1 class="text-gray-800 font-bold text-2xl my-2">{posts.data[posts.data.length-1].attributes.title}</h1>
                <p class="text-gray-700 mb-2 md:mb-6 text_desc">{posts.data[posts.data.length-1].attributes.description}</p>
                <div class="flex justify-between mb-2">
                    <span class="font-thin text-sm">{posts.data[posts.data.length-1].attributes.date}</span>
                    <span><a href={`/posts/${posts.data[posts.data.length-1].id}`} class="sm:block mb-2 text-gray-800 font-bold">Read more</a></span>
                </div>
                </div>
                <div className="lg:h-96 md:h-48 h-48 w-full object-cover object-center relative">
                    <Image src={process.env.IMAGES_STRAPI_URL + posts.data[posts.data.length-1].attributes.image.data.attributes.url} layout="fill" alt="image"  />
                </div>
            </div>
            <div class="mt-6 md:flex space-x-6">
            {latestPosts.reverse().map((post, index) => {
                if(index>0){
                return( 
                    <>
                        <div className="px-7 ml-6 mr-6 shadow-md mb-8">
                        <div className="lg:h-48 md:h-48 h-48 w-full object-cover object-center relative">
                        <Image src={process.env.IMAGES_STRAPI_URL + post.attributes.image.data.attributes.url} layout="fill" alt="image"  />
                        </div>
                            <div className="pb-3">
                                <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">{post.attributes.title}</h1>
                                <p class="text-gray-700 mb-2 text_desc">{post.attributes.description}</p>
                                <div class="flex justify-between mt-4 mb-4">
                                    <span class="font-thin text-sm">{post.attributes.date}</span>
                                    <span><a href={`/posts/${post.id}`} class="sm:block mb-2 text-gray-800 font-bold">Read more</a></span>
                                </div>
                            </div>
                        </div>
                        <style>
                            {
                                `
                                .text_desc{
                                    max-width: 700px;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 3;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                                `
                            }
                        </style>
                    </>
                );
                }
                    
                
            })}
            </div>
        </main>
        );
    }

    return (
        <>
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mt-9">
                Blog Adria Hydrofoil Tima
            </h1>
            {renderPostPreviews()}
        </>
    )
}

export default HomeLatestPosts