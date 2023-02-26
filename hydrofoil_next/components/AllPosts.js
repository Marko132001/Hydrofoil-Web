import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

function AllPosts({ posts, t }){

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        setAllPosts(posts.data);
    }, [posts.data]);

    function renderPostPreviews(){
        
            return (
                <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h5 className="text-base md:text-lg text-blue-700 mb-1">{t("posts:novosti")}</h5>
                        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Adria Hydrofoil Blog</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {allPosts.reverse().map((post, index) => {
                            return(
                                <>
                                <div key={index} className="p-4 sm:w-1/2 lg:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-blue-700 hover:text-white transition duration-300 ease-in">
                                            <div className="lg:h-72 md:h-48 h-48 w-full object-cover object-center relative">
                                            <Image src={process.env.IMAGES_STRAPI_URL + post.attributes.image.data.attributes.url} layout="fill" fill alt="image"  />
                                            </div>
                                        <div className="p-6">
                                            <h2 className="text-base font-medium text-blue-300 mb-1">{post.attributes.date}</h2>
                                            <h1 className="text-2xl font-semibold mb-3">{post.attributes.title}</h1>
                                            <p className="leading-relaxed mb-3 text_desc">{post.attributes.description}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link href={`/posts/${post.id}`}>
                                                <a href="#" className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0">{t("posts:saznajte_vise")}
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                </Link>
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