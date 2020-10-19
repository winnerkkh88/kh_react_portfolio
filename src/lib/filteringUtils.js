import poscoIctLogo from "../components/css/image/company-logo/posco-ict-logo-opacity.png";
import samsungSdsLogo from "../components/css/image/company-logo/samsung-sds-opacityy.png";
import lfLogo from "../components/css/image/company-logo/lf-logo-opacity.png";

export const companyInfo = (companyName, experiances) => {
    let company = {};

    // eslint-disable-next-line
    experiances.map((info) => {
        if (info.company === companyName) {
            company = info;
        }
    });
    return company;
};

export const logoStyle = (companyName) => {
    let logoBackground = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    if (companyName === "POSCO ICT") {
        logoBackground.backgroundImage = `url(${poscoIctLogo})`;
    } else if (companyName === "SAMSUNG SDS") {
        logoBackground.backgroundImage = `url(${samsungSdsLogo})`;
        logoBackground.backgroundSize = "400px";
    } else {
        logoBackground.backgroundImage = `url(${lfLogo})`;
        logoBackground.backgroundSize = "450px";
    }

    return logoBackground;
};
