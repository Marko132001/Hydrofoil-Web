import React from 'react';
import Image from 'next/image';

function AllPostsPreview( {post} ) {
  return (
    <>
      
      <div className="allPostsPreview">
            <div className="allPostsImage">
                <Image src={ `${'http://localhost:1337'}${post.attributes.image.data.attributes.formats.small.url}` } width="400" height="267" alt="image"  />
            </div>
            <div>
                <span>{post.attributes.date}</span>
            </div>
            <h3 className="allPosts-title">{post.attributes.title}</h3>    
            <p className="allPosts-text">{post.attributes.description}</p>
            <a href={`/posts/${post.id}`} className="post-cta">Read more</a>
      </div>
      
    </>
    
  )
}

export default AllPostsPreview