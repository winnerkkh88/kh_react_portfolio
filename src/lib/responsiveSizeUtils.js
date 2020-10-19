import { useState, useEffect } from "react";

export const isRoutingMoveDown = (isRoutingMove, setIsRoutingMove) => {
    if (isRoutingMove === true) {
        document.getElementById("routing").style.marginTop = "210px";
    } else {
        document.getElementById("routing").style.marginTop = "55px";
    }
    setIsRoutingMove(!isRoutingMove);
};

export const UseScreenLiveWidth = (isRoutingMove) => {
    const [windowWidth, setWindowWidth] = useState(
        window.document.documentElement.clientWidth
    );
    window.addEventListener("resize", () => {
        setWindowWidth(window.document.documentElement.clientWidth);
    });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.document.documentElement.clientWidth);
        });

        if (windowWidth > 769) {
            document.getElementById("routing").style.marginTop = "55px";
            document.getElementById("navDropDownList").style.marginTop = "0px";
        } else {
            if (isRoutingMove === false) {
                document.getElementById("routing").style.marginTop = "215px";
            }
        }
    }, [windowWidth, isRoutingMove]);
};

export function UseScreenHomeMainTop() {
    const [windowWidth, setWindowWidth] = useState(
        window.document.documentElement.clientWidth
    );

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.document.documentElement.clientWidth);
        });

        if (windowWidth > 1500) {
            document.getElementById("home-main").style.paddingTop = "7rem";
        } else {
            document.getElementById("home-main").style.paddingTop = "0.2rem";
        }
    }, [windowWidth]);
    return windowWidth;
}

//Getting the value of live clientHeight
export function UseScreenLiveHeight() {
    const [windowHeight, setWindowHeight] = useState(
        window.document.documentElement.clientHeight
    );

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowHeight(window.document.documentElement.clientHeight);
        });
    }, [windowHeight]);

    return windowHeight;
}
