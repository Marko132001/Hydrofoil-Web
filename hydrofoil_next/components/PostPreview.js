import React from 'react';
import Link from "next/link";

function PostPreview( {post} ) {
  return (
    <>
      <Link href="#">
      <div className="postPreview">
          <img src={ `${'http://localhost:1337'}${post.attributes.image.data.attributes.formats.small.url}` } width="400" height="267" alt="image"  />
          <body>
            <h3 className="post-title">{post.attributes.title}</h3>    
            <p className="post-text">{post.attributes.description}</p>
          </body>
      </div>
      </Link>
    </>
    
  )
}

export default PostPreview