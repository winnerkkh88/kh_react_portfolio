import axios from "axios";
//import { sleep } from "./experiences";

// Sending the feedback to my email
export const sendFeedbackEmail = async (name, email, feedback) => {
    //await sleep(1000);
    return await axios({
        method: "POST",
        url:
            "https://us-central1-node-kh.cloudfunctions.net/app/sendFeedbackEmail",
        data: {
            name,
            email,
            feedback,
        },
    })
        .then((response) => {
            //console.log(response);
            alert("Your Feedback Email has been sent!\nThank you^^");
        })
        .catch(() => {
            alert("Please try again!\nSorry for the inconvenience :(");
            throw new Error("Http Communication Error(sendFeedbackEmail)");
        });
};
