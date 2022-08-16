import React from 'react';
import Image from 'next/image';

function ImageAndCaption( {element} ) {

    return (
        <>
            <h1 className="about-title">{element.title}</h1>
            <div className="allElements">
                
                {element.imageComponent.map((item) => {

                    return(
                        <div className="imageAndCaption">
                            <div className="image">
                                <Image src={ `${'http://localhost:1337'}${item.image.data.attributes.url}` } width="300" height="400" alt="image"  />
                            </div>
                            <h3 className="name">{item.name}</h3>    
                            <p className="description">{item.description}</p>
                        </div>
                    );

                })}

            </div>
        </>
    );
}

export default ImageAndCaption