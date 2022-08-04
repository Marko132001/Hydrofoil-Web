import React from 'react';
import Image from 'next/image';
import MarkdownIt from "markdown-it";
import ReactPlayer from 'react-player';

function ZigZagLayout( {element} ){


    const md = new MarkdownIt();
    const htmlContent = md.render(element.attributes.description);

    function renderVideo(){
        return element.attributes.images_and_video.data.map((video) => {
            return <ReactPlayer controls url={ `${'http://localhost:1337'}${video.attributes.url}` } />
        });
    }
    
    
    if((element.attributes.title === null || element.attributes.title === "") && (element.attributes.description === null || element.attributes.description === "")){
        
        return(
            <>
                <div>
                    {renderVideo()}
                </div>
            </>        
        );

    }
    else if(element.attributes.description === null || element.attributes.description === ""){
        
        return(
        <>
            <div className={element.attributes.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <Image
                    src = { `${'http://localhost:1337'}${element.attributes.image.data.attributes.url}` }
                    alt = "image"
                    layout="responsive"
                    width="400"
                    height="267"
                    />
                </div>
    
                <div className="layout_text">
                    <h3>{element.attributes.title}</h3>
                </div>
            </div>
        </> 
        );
    }
    else if(element.attributes.title === null || element.attributes.title === ""){
        
        return(
            <div className={element.attributes.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <Image
                    src = { `${'http://localhost:1337'}${element.attributes.image.data.attributes.url}` }
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
        <>
        </>
    );

    
}

export default ZigZagLayout;