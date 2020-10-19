import React, { useRef, useEffect } from "react";
import UsedTools from "../lib/experiencesDisplayInfo/UsedTools";
import UsedLanguages from "../lib/experiencesDisplayInfo/UsedLanguages";
import UsedDBMS from "../lib/experiencesDisplayInfo/UsedDBMS";
import UsedFrameworks from "../lib/experiencesDisplayInfo/UsedFrameworks";
import UsedLibraries from "../lib/experiencesDisplayInfo/UsedLibraries";

function ExperienceDetails({ experincedCompoany, logoStyle }) {
    const {
        company,
        projectName,
        period,
        projectSummary,
        frameworks,
        languages,
        dbms,
        tools,
        libraries,
    } = experincedCompoany;

    // To mount ExperiencDetails component at the beginning
    const isMoveScroll = useRef(null);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop);
    const executeScroll = () => scrollToRef(isMoveScroll);

    useEffect(() => {
        executeScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="row heading-subtitle" ref={isMoveScroll}>
                <div className="col-sm-12">{company}</div>
                <div className="col-sm-12">({period})</div>
            </div>
            <div className="aboutme-introduction" style={logoStyle}>
                <div className="text-left experience-subject">
                    <strong>Project</strong>
                </div>
                <div className="container-fluid">{projectName}</div>
                &nbsp;
                <div className="text-left experience-subject">
                    <strong>Summary</strong>
                </div>
                <div className="container-fluid">{projectSummary}</div>
                &nbsp;
                <div>
                    <UsedTools tools={tools} />
                    <UsedLanguages languages={languages} />
                    <UsedDBMS dbms={dbms} />
                    <UsedFrameworks frameworks={frameworks} />
                    <UsedLibraries libraries={libraries} />
                </div>
            </div>
        </>
    );
}

export default ExperienceDetails;
