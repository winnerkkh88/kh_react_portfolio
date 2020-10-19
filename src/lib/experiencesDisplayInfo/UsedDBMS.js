import React from "react";
import OracleDBMS from "../../components/css/image/language-logo/oracledb-logo.png";

function DbmsInfo({ db }) {
    const imgSrc = () => {
        let imgSrc = null;
        if (db.indexOf("Oracle") !== -1) {
            imgSrc = OracleDBMS;
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
                    alt={db}
                    height="150"
                    width="230"
                />

                <figcaption>
                    <div className="hidden-xs" style={{ paddingTop: 75 / 2 }}>
                        <h2>
                            <strong>{db}</strong>
                        </h2>
                    </div>
                </figcaption>
            </div>
        </>
    );
}

export default function UsedDBMS({ dbms }) {
    return (
        <>
            <div className="text-left experience-subject">
                <strong>Used DBMS (SQL)</strong>
            </div>
            <div className="row">
                {dbms.map((db, index) => (
                    <DbmsInfo db={db} key={index} />
                ))}
            </div>
            &nbsp;
        </>
    );
}
