import React from "react";
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
            </div>
        </>
    );
}

export default TeredoNavalisElements;