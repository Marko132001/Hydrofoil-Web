import React from 'react';
import Image from 'next/image';

function Timeline({post}) {
  return (

        <>
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {post.attributes.title}
                    </span>
                    <div className="allPostsImage">
                        <Image src={ `${'http://localhost:1337'}${post.attributes.image.data.attributes.formats.small.url}` } width="400" height="267" alt="image"  />
                    </div>
                    <time>{post.attributes.date}</time>
                    <p>{post.attributes.description}</p>
                    <a
                        href={`/posts/${post.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more
                    </a>
                    <span className="circle" />
                </div>
            </div>
        </>

    );

}

export default Timeline