import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import {
    UseScreenLiveHeight,
    UseScreenHomeMainTop,
} from "../lib/responsiveSizeUtils";

function HomeContainer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const currentTime = setInterval(() => {
            const month = new Date();
            const date =
                // month.getFullYear() +
                // "/" +
                month.getMonth() +
                1 +
                "/" +
                month.getDate() +
                " " +
                month.getHours() +
                ":" +
                month.getMinutes() +
                ":" +
                month.getSeconds();
            return setTime(date);
        }, 1000);

        return () => {
            //avoid memory leaking by stop currentTime() when unmounted
            clearInterval(currentTime);
        };
    }, []);

    return (
        <>
            <Home
                time={time}
                UseScreenLiveHeight={UseScreenLiveHeight}
                UseScreenHomeMainTop={UseScreenHomeMainTop}
            />
        </>
    );
}

export default HomeContainer;
