import React from "react";
import EclipseLogo from "../../components/css/image/language-logo/eclipse-logo.png";
import SqlDeveloperLogo from "../../components/css/image/language-logo/sqldeveloper-logo.png";

function ToolInfo({ tool }) {
    const imgSrc = () => {
        let imgSrc = null;
        if (tool.indexOf("Eclipse") !== -1) {
            imgSrc = EclipseLogo;
        } else if (tool.indexOf("SQL Developer") !== -1) {
            imgSrc = SqlDeveloperLogo;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    };

    return (
        <>
            <div className="col-md-3 mouseOver-effect">
                <img
                    className="img-logo"
                    src={imgSrc()}
                    alt={tool}
                    height="150"
                    width="230"
                />

                <figcaption>
                    <div className="hidden-xs" style={{ paddingTop: 75 / 2 }}>
                        <h2>
                            <strong>{tool}</strong>
                        </h2>
                    </div>
                </figcaption>
            </div>
        </>
    );
}

export default function UsedTools({ tools }) {
    return (
        <>
            <div className="text-left experience-subject">
                <strong>Used Development & DBMS Tool</strong>
            </div>
            <div className="row">
                {tools.map((tool, index) => (
                    <ToolInfo tool={tool} key={index} />
                ))}
            </div>
            &nbsp;
        </>
    );
}
