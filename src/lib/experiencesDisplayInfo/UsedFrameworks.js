import React from "react";
import SpringLogo from "../../components/css/image/language-logo/spring-logo.png";
import AnyframeLogo from "../../components/css/image/language-logo/anyframe-logo.png";
import StrutsLogo from "../../components/css/image/language-logo/struts-logo.png";

function FrameworkInfo({ framework }) {
    const imgSrc = () => {
        let imgSrc = null;
        if (framework === "Spring") {
            imgSrc = SpringLogo;
        } else if (framework.indexOf("Any") !== -1) {
            imgSrc = AnyframeLogo;
        } else if (framework === "Struts2") {
            imgSrc = StrutsLogo;
        } else {
            imgSrc = "";
        }

        return imgSrc;
    };

    const frmName = (framework) => {
        if (framework.indexOf("Any") !== -1) {
            return (
                <div>
                    <span>
                        <strong>{framework}</strong>
                    </span>
                    <br />
                    <span style={{ fontSize: 20 }}>
                        (Developed by Samsung SDS)
                    </span>
                </div>
            );
        } else {
            return <strong>{framework}</strong>;
        }
    };

    const figcaptionTopPadding = (framework) => {
        let paddingTopValue = {};

        //returning style attribute
        if (framework.indexOf("Any") !== -1) {
            paddingTopValue = { paddingTop: 17 };
        } else {
            paddingTopValue = { paddingTop: 75 / 2 };
        }
        return paddingTopValue;
    };

    return (
        <>
            <div className="col-md-3 mouseOver-effect">
                <img
                    className="img-logo"
                    src={imgSrc()}
                    alt={framework}
                    height="150"
                    width="230"
                />

                <figcaption>
                    <div
                        className="hidden-xs"
                        style={figcaptionTopPadding(framework)}
                    >
                        <h2>
                            <strong>{frmName(framework)}</strong>
                            &nbsp;
                        </h2>
                    </div>
                </figcaption>
            </div>
        </>
    );
}

export default function UsedFrameworks({ frameworks }) {
    return (
        <>
            <div className="text-left experience-subject">
                <strong>Used Frameworks</strong>
            </div>
            <div className="row">
                {frameworks.map((framework, index) => (
                    <FrameworkInfo framework={framework} key={index} />
                ))}
            </div>
            &nbsp;
        </>
    );
}
