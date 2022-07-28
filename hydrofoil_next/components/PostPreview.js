import React from 'react';
import Link from "next/link";

function PostPreview( {post} ) {
  return (
    <>
      <Link href="#">
      <div className="postPreview">
        <div className="postImage">
          <img src={ `${'http://localhost:1337'}${post.attributes.image.data.attributes.formats.small.url}` } width="400" height="267" alt="image"  />
        </div>
        <div className="postInfo">
          <div className="postDate">
            <span>Sunday </span>
            <span>July 26 2022</span>
          </div>
          <h3 className="post-title">{post.attributes.title}</h3>    
          <p className="post-text">{post.attributes.description}</p>
          <a href="#" className="post-cta">Read more</a>
        </div>

      </div>
      </Link>
    </>
    
  )
}

export default PostPreview