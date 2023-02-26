import React from "react";
import Layout from "./DataComponents/Layout";

function LayoutElements({ elements }){
    function renderLayoutElements(){
        return elements.data.attributes.layout.map((element, index) => {
            return <Layout key={index} element={element} />
        });
    }

    return (
        <>
            <div className="elements-layout">    
                {renderLayoutElements()}
            </div>
        </>
    );
}

export default LayoutElements;