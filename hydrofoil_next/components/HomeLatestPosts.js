import React, { useEffect, useState } from 'react'
import PostPreview from './PostPreview';


function HomeLatestPosts( {posts} ) {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.data.slice(0, 5));
    }, [posts.data]);

    function renderPostPreviews(){
        return latestPosts.map((post) => {
            return <PostPreview post={post} key={post.id}/>
        });
    }

    return (
        <div className="latestPosts">
            <h2>Latest Posts</h2>
            {renderPostPreviews()}
        </div>
    )
}

export default HomeLatestPosts