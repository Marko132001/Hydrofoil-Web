import React from 'react';
import { useState, useEffect } from 'react';

function CountdownTimer({t}){

    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("1/15/2024 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            
            if(difference >= 0){

                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                setDays(d);

                const h = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                setHours(h);

                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                setMinutes(m);

                const s = Math.floor((difference % (1000 * 60)) / 1000);
                setSeconds(s);

                if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                    setPartyTime(true);
                }

            }

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="bg-white min-w-screen">
            <div className="flex items-center justify-center px-5 py-5 pt-20">
                <div className="text-gray-500 dark:text-gray-400">
                    <div className="text-6xl text-center grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-4 w-full items-center justify-center">
                        <div className="w-24 mx-1 p-2 text-white bg-blue-800 rounded-lg">
                            <div className="font-mono leading-none">{days}</div>
                            <div className="font-mono uppercase text-sm leading-none">{t("home:days")}</div>
                        </div>
                        <div className="w-24 mx-1 p-2 text-white bg-blue-800 rounded-lg">
                            <div className="font-mono leading-none">{hours}</div>
                            <div className="font-mono uppercase text-sm leading-none">{t("home:hours")}</div>
                        </div>
                        <div className="w-24 mx-1 p-2 text-white bg-blue-800 rounded-lg">
                            <div className="font-mono leading-none">{minutes}</div>
                            <div className="font-mono uppercase text-sm leading-none">{t("home:minutes")}</div>
                        </div>
                        <div className="w-24 mx-1 p-2 text-white bg-blue-800 rounded-lg">
                            <div className="font-mono leading-none">{seconds}</div>
                            <div className="font-mono uppercase text-sm leading-none">{t("home:seconds")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CountdownTimer