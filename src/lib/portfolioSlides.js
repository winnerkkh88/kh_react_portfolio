import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function portfolioSlides({ slideData, links }) {
    const columnResponsive = `col-sm-${12 / links.length}`;

    return (
        <>
            <div className="slides">
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-sm-12 slides-title">
                        {slideData.pageTitle}
                    </div>
                </div>
                <hr />
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-sm-6">
                        <div className="sub-slides-tile">Webpage UI</div>
                        <Carousel>
                            {slideData.webpageUiLinks.map((link, key) => (
                                <div key={key}>
                                    <img
                                        alt={slideData.webLegendContents[key]}
                                        src={link}
                                    />
                                    <p
                                        className="legend"
                                        style={{
                                            fontSize: "20px",
                                            padding: "0px",
                                        }}
                                    >
                                        {slideData.webLegendContents[key]}
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <hr />
                    <div className="col-sm-6">
                        <div className="sub-slides-tile">Mobile UI</div>
                        <Carousel>
                            {slideData.mobileUiLinks.map((link, key) => (
                                <div key={key}>
                                    <img
                                        alt={
                                            slideData.mobileLegendContents[key]
                                        }
                                        src={link}
                                    />
                                    <p
                                        className="legend"
                                        style={{
                                            fontSize: "20px",
                                            padding: "0px",
                                        }}
                                    >
                                        {slideData.mobileLegendContents[key]}
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div
                    className="row"
                    style={{ textAlign: "center", fontSize: "20px" }}
                >
                    {links.map((link, key) => (
                        <div key={key} className={columnResponsive}>
                            {link}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
