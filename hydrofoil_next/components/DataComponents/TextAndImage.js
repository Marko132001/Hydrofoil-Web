import React from 'react';
import Image from 'next/image';
import MarkdownIt from "markdown-it";
import VideoPlayer from './VideoPlayer';

function TextAndImage( {element} ) {
    const md = new MarkdownIt();
    const htmlContent = md.render(element.description);
    
    if(element.__component == "components.zig-zag"){

    
        return(
            <div className={element.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <Image
                    src = { `${'http://localhost:1337'}${element.image.data.attributes.url}` }
                    alt = "image"
                    layout="responsive"
                    width="400"
                    height="267"
                    />
                </div>

                <div className="layout_text" dangerouslySetInnerHTML={{__html: htmlContent}}>
                    
                </div>
            </div>
        );

    }

    return(
        <div className={element.changeLayout ? 'layout active' : 'layout'}>
            <div className="layout_image">
                <VideoPlayer element={element} />
            </div>

            <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>
    
            </div>
            
        </div>
    );

}

export default TextAndImage