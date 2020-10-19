import React from "react";
import JavaLogo from "../../components/css/image/language-logo/java-logo.png";
import JavaScriptLogo from "../../components/css/image/language-logo/js-logo.png";
import JspLogo from "../../components/css/image/language-logo/jsp-logo.png";
import Html5Logo from "../../components/css/image/language-logo/html5.png";
import CssLogo from "../../components/css/image/language-logo/css.png";

function LanguagelInfo({ language }) {
    const imgSrc = () => {
        let imgSrc = null;
        if (language === "JAVA") {
            imgSrc = JavaLogo;
        } else if (language === "JavaScript") {
            imgSrc = JavaScriptLogo;
        } else if (language === "JSP") {
            imgSrc = JspLogo;
        } else if (language === "HTML5") {
            imgSrc = Html5Logo;
        } else if (language === "CSS") {
            imgSrc = CssLogo;
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
                    alt={language}
                    height="150"
                    width="230"
                />

                <figcaption>
                    <div className="hidden-xs" style={{ paddingTop: 75 / 2 }}>
                        <h2>
                            <strong>{language}</strong>
                            &nbsp;
                        </h2>
                    </div>
                </figcaption>
            </div>
        </>
    );
}

export default function UsedLanguages({ languages }) {
    return (
        <>
            <div className="text-left experience-subject">
                <strong>Used Programming Languages</strong>
            </div>
            <div className="row">
                {languages.map((language, index) => (
                    <LanguagelInfo language={language} key={index} />
                ))}
            </div>
            &nbsp;
        </>
    );
}
