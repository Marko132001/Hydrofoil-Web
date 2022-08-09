import React from "react";
import CountingAnimation from "./DataComponents/CountingAnimation";
import ZigZagLayout from "./DataComponents/ZigZagLayout";

function TeredoNavalisElements({ elements }){
    function renderTeredoNavalisElements(){
        return elements.data.map((element) => {
            return <ZigZagLayout element={element} key={element.id} />
        });
    }

    return (
        <>
            <div className="teredoNavalis-layout">
                <CountingAnimation />     
                {renderTeredoNavalisElements()}
            </div>
        </>
    );
}

export default TeredoNavalisElements;