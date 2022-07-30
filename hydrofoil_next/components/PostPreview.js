import React from 'react';

function PostPreview( {post} ) {
  return (
    <>
      
      <div className="postPreview">
        <div className="postImage">
          <img src={ `${'http://localhost:1337'}${post.attributes.image.data.attributes.formats.small.url}` } width="400" height="267" alt="image"  />
        </div>
        <div className="postInfo">
          <div className="postDate">
            <span>{post.attributes.date}</span>
          </div>
          <h3 className="post-title">{post.attributes.title}</h3>    
          <p className="post-text">{post.attributes.description}</p>
          <a href={`/posts/${post.id}`} className="post-cta">Read more</a>
        </div>

      </div>
      
    </>
    
  )
}

export default PostPreview