import React, { useEffect } from "react";

function CountingAnimation(){

        useEffect(() => {

            const counters = document.querySelectorAll('.counter');

            counters.forEach((counter) => {

                counter.innerText = '0';
        
                const updateCounter = () => {
                    const target = counter.getAttribute('data-target');
                    const c = +counter.innerText;
        
                    const increment = target / 200;
        
                    if(c < target){
                        counter.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(updateCounter, 50);
                    }
                };
    
                updateCounter();
            });

          }, []);  


    return(
        <div className="counter-layout">
            <div className="counter-container">
                <i className="gg-chevron-double-up"></i>
                <div className="counter" data-target="16"></div>
                <span>MAKSIMALNA BRZINA U ČVOROVIMA</span>
            </div>
            <div className="counter-container">
                <i className="gg-time"></i>
                <div className="counter" data-target="25"></div>
                <span>DOMET U MINUTAMA PRI MAKSIMALNOJ BRZINI</span>
            </div>
            <div className="counter-container">
                <i className="gg-sun"></i>
                <div className="counter" data-target="0"></div>
                <span>CO2 EMISIJA</span>
            </div>
        </div>
    );


}

export default CountingAnimation;