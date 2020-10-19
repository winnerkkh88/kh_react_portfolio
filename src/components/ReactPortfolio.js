import React, { useRef } from "react";
import "./css/ReactPortfolio.css";
import { Link } from "react-router-dom";

function ReactPortfolio({
    PortfolioSlides,
    overallPages,
    movieList,
    membershipList,
}) {
    const overallSlidesRef = useRef();
    const movieListSlidesRef = useRef();
    const membershipSlidesRef = useRef();

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 30);
    const executeScroll = (isMoveScroll) => scrollToRef(isMoveScroll);

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 title">
                        Portfolio UI Preview Slides
                    </h1>
                </div>
            </div>

            <hr />
            <div className="container">
                <div className="row">
                    <div
                        className="navigate-subject"
                        onClick={() => {
                            executeScroll(overallSlidesRef);
                        }}
                    >
                        Overall Slides
                    </div>
                    <div
                        className="navigate-subject"
                        onClick={() => {
                            executeScroll(movieListSlidesRef);
                        }}
                    >
                        Movie List Sildes
                    </div>
                    <div
                        className="navigate-subject"
                        onClick={() => {
                            executeScroll(membershipSlidesRef);
                        }}
                    >
                        Membership Management
                    </div>
                    <div
                        className="navigate-subject"
                        onClick={() => {
                            alert("Preparing Shopping Mall Site ");
                        }}
                    >
                        Shopping Mall
                    </div>
                </div>
            </div>

            <hr />
            <br />
            <div className="container animated fadeInLeftBig">
                <div ref={overallSlidesRef}>
                    <PortfolioSlides
                        slideData={overallPages}
                        links={[
                            <Link to="/">Visit to Home</Link>,
                            <Link to="/About">Visit to About Me</Link>,
                            <Link to="/ContactMe">Visit to Contact Me</Link>,
                        ]}
                    />
                </div>
                <div ref={movieListSlidesRef}>
                    <PortfolioSlides
                        slideData={movieList}
                        links={[
                            <Link to="/portfolio/MovieListTop20">
                                Visit to TOP 20 Movies in Torrent
                            </Link>,
                        ]}
                    />
                </div>

                <div ref={membershipSlidesRef}>
                    <PortfolioSlides
                        slideData={membershipList}
                        links={[
                            <Link to="/portfolio/MembershipManagement">
                                Visit Membership Management
                            </Link>,
                        ]}
                    />
                </div>
            </div>
        </>
    );
}

export default ReactPortfolio;
