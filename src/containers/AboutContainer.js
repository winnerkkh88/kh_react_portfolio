import React, { useEffect } from "react";
import About from "../components/About";
import { getExperiences } from "../modules/experiences";
import { introductionNode } from "../lib/introductionNode";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

function AboutContainer() {
    const introParagraphElements = introductionNode();
    const { data, loading, error } = useSelector(
        (state) => state.experiences.experiences
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperiences());
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
            <About
                introParagraphElements={introParagraphElements}
                experiences={data.data}
            />
        </>
    );
}

export default AboutContainer;
