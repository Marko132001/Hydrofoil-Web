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
            <div>     
                {renderTeredoNavalisElements()}
                <CountingAnimation />
            </div>
        </>
    );
}

export default TeredoNavalisElements;