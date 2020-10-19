import React from "react";
import ContactMe from "../components/ContactMe";
import useEmailFormInputs from "../lib/useEmailFormInputs";
import { sendFeedbackEmail } from "../api/sendFeedbackEmail";

function ContactMeContainer() {
    const [inputs, onChange, onReset] = useEmailFormInputs({
        name: "",
        email: "",
        feedback: "",
    });

    const onSubmit = (name, email, feedback) => {
        sendFeedbackEmail(name, email, feedback);
        onReset();
    };

    return (
        <>
            <ContactMe
                inputs={inputs}
                onChange={onChange}
                onReset={onReset}
                onSubmit={onSubmit}
            />
        </>
    );
}

export default ContactMeContainer;
