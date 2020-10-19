import React from "react";
import ExperienceDetails from "../components/ExperienceDetails";
import { companyInfo, logoStyle } from "../lib/filteringUtils";

function ExperienceDetailsContainer({ companyName, experiances }) {
    const experincedCompoany = companyInfo(companyName, experiances);
    const logo = logoStyle(companyName);

    return (
        <>
            <ExperienceDetails
                experincedCompoany={experincedCompoany}
                logoStyle={logo}
            />
        </>
    );
}

export default ExperienceDetailsContainer;
