import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AllPostsPreview from "./AllPostsPreview";

function AllPosts({ posts }){

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        setAllPosts(posts.data);
    }, [posts.data]);

    function renderPostPreviews(){
        
            return (
                //<AllPostsPreview post={post} key={post.id} />
                <section class="md:h-full flex items-center text-gray-600">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-12">
                        <h5 class="text-base md:text-lg text-blue-700 mb-1">Novosti</h5>
                        <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">Adria Hydrofoil Blog</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {allPosts.reverse().map((post) => {
                            return(
                                <>
                                <div class="p-4 sm:w-1/2 lg:w-1/3">
                                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div class="lg:h-72 md:h-48 h-48 w-full object-cover object-center relative">
                                            <Image src={process.env.IMAGES_STRAPI_URL + post.attributes.image.data.attributes.url} layout="fill" alt="image"  />
                                            </div>
                                        <div class="p-6 hover:bg-blue-700 hover:text-white transition duration-300 ease-in">
                                            <h2 class="text-base font-medium text-blue-300 mb-1">{post.attributes.date}</h2>
                                            <h1 class="text-2xl font-semibold mb-3">{post.attributes.title}</h1>
                                            <p class="leading-relaxed mb-3 text_desc">{post.attributes.description}</p>
                                            <div class="flex items-center flex-wrap ">
                                                <a href={`/posts/${post.id}`} class="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0">Saznajte više
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <style>
                                    {
                                        `
                                        .text_desc{
                                            max-width: 700px;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 2;
                                            -webkit-box-orient: vertical;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                        }
                                        `
                                    }
                                </style>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
            );
    }

    return (
        <>
            <div>     
                {renderPostPreviews()}
            </div>
        </>
    );
}

export default AllPosts;