import React, { useState, useCallback } from "react";
import MainIndex from "../components/MainIndex";
import {
    UseScreenLiveWidth,
    isRoutingMoveDown,
} from "../lib/responsiveSizeUtils";

function MainIndexContainer() {
    const [isRoutingMove, setIsRoutingMove] = useState(true);

    return (
        <>
            <MainIndex
                isRoutingMoveDown={useCallback(() => {
                    isRoutingMoveDown(isRoutingMove, setIsRoutingMove);
                }, [isRoutingMove])}
                UseScreenLiveWidth={useCallback(() => {
                    UseScreenLiveWidth(isRoutingMove);
                }, [isRoutingMove])}
            />
        </>
    );
}

export default MainIndexContainer;
