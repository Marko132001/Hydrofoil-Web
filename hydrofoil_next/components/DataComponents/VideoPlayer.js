import React from "react";
import dynamic from "next/dynamic";


function VideoPlayer( {element} ){

    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

    function renderVideo(){
        return element.videos.data.map((video) => {
            return <ReactPlayer className="videoPlayer" video={video} key={video.id} controls url={ `${'http://localhost:1337'}${video.attributes.url}` } />
        });
    }
    
    return(
        <>
            <div className="videoPlayerLayout">
                {renderVideo()}
            </div>
        </>        
    );

}

export default VideoPlayer;