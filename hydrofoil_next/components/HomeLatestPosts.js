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
            <>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <a href={`/posts/${posts.data[posts.data.length-1].id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                            <img src={process.env.IMAGES_STRAPI_URL + posts.data[posts.data.length-1].attributes.image.data.attributes.url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{posts.data[posts.data.length-1].attributes.title}</h3>
                                <span className="text-xs dark:text-gray-400">{posts.data[posts.data.length-1].attributes.date}</span>
                                <p className="text_desc">{posts.data[posts.data.length-1].attributes.description}</p>
                            </div>
                        </a>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {latestPosts.reverse().map((post, index) => {
                            if(index>0){
                                return(
                                    <>
                                        <a href={`/posts/${post.id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={process.env.IMAGES_STRAPI_URL + post.attributes.image.data.attributes.url} />
                                            <div className="p-6 space-y-2">
                                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.attributes.title}</h3>
                                                <span className="text-xs dark:text-gray-400">{post.attributes.date}</span>
                                                <p className="text_desc">{post.attributes.description}</p>
                                            </div>
                                        </a>
                                    </>
                                );
                            }
                        })}
                        </div>
                        <div className="flex justify-center pb-10">
                            <a href="/posts" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Više novosti</a>
                        </div>
                    </div>
                </section>
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

    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center mt-9 pt-7">
                Blog Adria Hydrofoil Tima
            </h1>
            {renderPostPreviews()}
        </div>
    )
}

export default HomeLatestPosts