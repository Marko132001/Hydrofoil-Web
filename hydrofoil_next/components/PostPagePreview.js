import React from "react";
import GridGallery from "./DataComponents/GridGallery";

function PostPagePreview( {post} ){

    return(
        <>
            <div className="max-w-screen-lg mx-auto">
            <main className="mt-10">
                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                        {post.attributes.title}
                        </h2>
                    </div>

                    <img className="w-full object-cover lg:rounded" src={process.env.IMAGES_STRAPI_URL + post.attributes.image.data.attributes.url} style={{height: '28em'}} />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12">

                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                    {post.attributes.paragraph.map((par, index) => {
                        return(
                            <>
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">{par.subtitle}</h2>
                                <p className="pb-6">{par.content}</p>
                            </>
                        );
                    })}
                </div>

                </div>
                </main>
            </div>
            {
            (post.attributes.gallery != null) &&
            <GridGallery element={post.attributes.gallery} />
            }
        </>
    );
}

export default PostPagePreview;