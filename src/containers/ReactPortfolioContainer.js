import React, { useEffect } from "react";
import ReactPortfolio from "../components/ReactPortfolio";
import PortfolioSlides from "../lib/portfolioSlides";
import { getSlidesData } from "../modules/slidesData";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

function ReactPortfolioContainer() {
    const { data, loading, error } = useSelector(
        (state) => state.slidesData.slidesData
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSlidesData());
    }, [dispatch]);

    if (loading && !data)
        return (
            <div className="data-handling-sentence">
                <CircularProgress />
            </div>
        );
    if (error)
        return (
            <div className="data-handling-sentence">
                HTTP Communication Error!
            </div>
        );
    if (!data) return null;

    return (
        <>
            <ReactPortfolio
                PortfolioSlides={PortfolioSlides}
                overallPages={data.data.overallPages}
                movieList={data.data.movieList}
                membershipList={data.data.membershipList}
            />
        </>
    );
}

export default ReactPortfolioContainer;
