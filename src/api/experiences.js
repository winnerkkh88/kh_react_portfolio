import axios from "axios";

// creating function for Promise while wating for n milliseconds
export const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// Getting the experiences
export const getExperiences = async () => {
    await sleep(500); // wait for 0.5 seconds

    return await axios
        .get("https://us-central1-node-kh.cloudfunctions.net/app/experiences")
        .then((response) => {
            return response;
        })
        .catch(() => {
            throw new Error("Http Communication Error(getExperiences)");
        });
};
