import React from "react";
import "./css/MainIndex.css";
import { useHistory } from "react-router-dom";

function Home({ time, UseScreenLiveHeight, UseScreenHomeMainTop }) {
    UseScreenHomeMainTop();
    const history = useHistory();

    return (
        <>
            <div className="home-background">
                <div
                    id="home-main"
                    className="container text-center"
                    style={{ height: `${UseScreenLiveHeight() - 55}px` }}
                >
                    <div className="wanted-job-position">Web Developer</div>
                    <div className="tagline-myname animated fadeInDown">
                        Beyond Web Coding
                        <br />
                        <span>- Kyunghoon Kim -</span>
                    </div>
                    <button
                        type="button"
                        className="hire-me btn btn-secondary btn-lg animated fadeInDown rotateIn"
                        style={{ color: "white" }}
                        onClick={() => {
                            history.push("/ContactMe");
                        }}
                    >
                        Contact Me!
                    </button>
                    <div className="current-date-time animated fadeInUp">
                        {time}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
