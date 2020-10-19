import React, { useEffect, useRef, useState } from "react";
import "./css/About.css";
import { Link } from "react-router-dom";
import poscoIctLogo from "./css/image/company-logo/posco-ict-logo.jpg";
import samsungSdsLogo from "./css/image/company-logo/samsung-sds-logo.jpg";
import lfLogo from "./css/image/company-logo/lf-logo.jpg";
import ExperienceDetailsContainer from "../containers/ExperienceDetailsContainer";
import coverLetter from "../resume/CoverLetter.pdf";
import resume from "../resume/Resume.pdf";

function About({ introParagraphElements, experiences }) {
    const [companyName, setCompanyName] = useState("");
    const [isShow, setIsShow] = useState(false);
    const isMoveScroll = useRef(null);
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const executeScroll = (isMoveScroll) => scrollToRef(isMoveScroll);

    useEffect(() => {
        for (let i = 0; i < introParagraphElements.length; i++) {
            document
                .getElementById("intro")
                .appendChild(introParagraphElements[i]);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="container-fluid introduction-frame">
                <div className="col-md-12">
                    <span className="heading-title animated fadeInLeftBig">
                        About Me
                    </span>
                    <h2 className="heading-subtitle animated fadeInLeftBig">
                        Who Am I?
                    </h2>

                    <div className="aboutme-introduction animated fadeInLeftBig">
                        <div id="intro"></div>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-md-4 btn btn-success download-button">
                                    {/* COVER LETTER DOWNLOAD */}
                                    <Link
                                        to={coverLetter}
                                        className="nav-link"
                                        target="blank"
                                        download="KYUNGHOON+KIM-cover-letter"
                                        style={{ color: "white" }}
                                    >
                                        COVER LETTER DOWNLOAD
                                    </Link>
                                </div>

                                <div className="col-md-4 btn btn-success download-button">
                                    {/* RESUME DOWNLOAD */}
                                    <Link
                                        to={resume}
                                        className="nav-link"
                                        target="blank"
                                        download="KYUNGHOON+KIM+resume"
                                        style={{ color: "white" }}
                                    >
                                        RESUME DOWNLOAD
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2
                        className="heading-subtitle animated fadeInLeftBig"
                        style={{
                            marginTop: "50px",
                        }}
                    >
                        Work Experiences
                        <span style={{ fontSize: "13px" }}>(Projects)</span>
                    </h2>
                    <div className="aboutme-experiences animated fadeInLeftBig">
                        <div className="container text-center">
                            <div className="row element-item grid">
                                {/* LG Fasion Experience Display */}
                                <div className="col-md-4 mouseOver-effect">
                                    <img
                                        className="img-logo"
                                        src={lfLogo}
                                        alt="LG FASION"
                                        height="150"
                                        width="230"
                                    />
                                    <figcaption>
                                        <div className="hidden-xs">
                                            <h3>
                                                {/* LG <span>FASHION</span> */}
                                                {experiences[0].company}
                                            </h3>
                                            <p>11/12/2018 - 09/30/2019</p>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                style={{ marginTop: "-25px" }}
                                                onClick={() => {
                                                    setCompanyName(
                                                        experiences[0].company
                                                    );
                                                    setIsShow(true);
                                                    executeScroll(isMoveScroll);
                                                }}
                                            >
                                                See more details
                                            </button>
                                        </div>
                                    </figcaption>
                                </div>

                                {/* SAMSUNG SDS Experience Display */}
                                <div className="col-md-4 mouseOver-effect">
                                    <img
                                        className="img-logo"
                                        src={samsungSdsLogo}
                                        alt="SAMSUNG SDS"
                                        height="150"
                                        width="230"
                                    />
                                    <figcaption>
                                        <div className="hidden-xs">
                                            <h3>{experiences[1].company}</h3>
                                            <p>7/16/2018 - 10/31/2018</p>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                style={{ marginTop: "-25px" }}
                                                onClick={() => {
                                                    setCompanyName(
                                                        experiences[1].company
                                                    );
                                                    setIsShow(true);
                                                    executeScroll(isMoveScroll);
                                                }}
                                            >
                                                See more details
                                            </button>
                                        </div>
                                    </figcaption>
                                </div>

                                {/* POSCO ICT Experience Display */}
                                <div className="col-md-4 mouseOver-effect">
                                    <img
                                        className="img-logo"
                                        src={poscoIctLogo}
                                        alt="POSCO ICT"
                                        height="150"
                                        width="230"
                                    />
                                    <figcaption>
                                        <div className="hidden-xs">
                                            <h3>{experiences[2].company}</h3>
                                            <p>3/28/2018 - 7/09/2018</p>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                style={{ marginTop: "-25px" }}
                                                onClick={() => {
                                                    setCompanyName(
                                                        experiences[2].company
                                                    );
                                                    setIsShow(true);
                                                    executeScroll(isMoveScroll);
                                                }}
                                            >
                                                See more details
                                            </button>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="experience-details"
                        style={{ marginTop: "50px" }}
                        ref={isMoveScroll}
                    >
                        {isShow && (
                            <ExperienceDetailsContainer
                                companyName={companyName}
                                experiances={experiences}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
