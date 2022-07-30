import React from "react";
import PostPreview from "./PostPreview";

function AllPosts({ posts }){
    function renderPostPreviews(){
        return posts.data.map((post) => {
            return <PostPreview post={post} key={post.id} />
        });
    }

    return (
        <div className="latestPosts">
            <h2>News</h2>
            {renderPostPreviews()}
        </div>
    );
}

export default AllPosts;