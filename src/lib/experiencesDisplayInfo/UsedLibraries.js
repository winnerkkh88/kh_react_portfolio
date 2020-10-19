import React from "react";
import MybatisLogo from "../../components/css/image/language-logo/mybatis-logo.png";
import jQueryLogo from "../../components/css/image/language-logo/jquery-logo.png";
import JQWidgetLogo from "../../components/css/image/language-logo/JQWidgets-logo.png";
import MavenLogo from "../../components/css/image/language-logo/maven-logo.png";
import SvnLogo from "../../components/css/image/language-logo/svn-logo.png";
function LibraryInfo({ library }) {
    const imgSrc = () => {
        let imgSrc = null;
        if (library.indexOf("Mybatis") !== -1) {
            imgSrc = MybatisLogo;
        } else if (library.indexOf("jQuery") !== -1) {
            imgSrc = jQueryLogo;
        } else if (library.indexOf("Widget") !== -1) {
            imgSrc = JQWidgetLogo;
        } else if (library.indexOf("Maven") !== -1) {
            imgSrc = MavenLogo;
        } else if (library.indexOf("SVN") !== -1) {
            imgSrc = SvnLogo;
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
                    alt={library}
                    height="150"
                    width="230"
                />

                <figcaption>
                    <div className="hidden-xs" style={{ paddingTop: 75 / 2 }}>
                        <h2>
                            <strong>{library}</strong>
                        </h2>
                    </div>
                </figcaption>
            </div>
        </>
    );
}

export default function UsedLibraries({ libraries }) {
    return (
        <>
            <div className="text-left experience-subject">
                <strong>Used Libraries & Version Control</strong>
            </div>
            <div className="row">
                {libraries.map((library, index) => (
                    <LibraryInfo library={library} key={index} />
                ))}
            </div>
        </>
    );
}
