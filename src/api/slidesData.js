import axios from "axios";
import { sleep } from "./experiences";

export const getSlidesData = async () => {
    await sleep(500); // wait for 0.5 seconds

    return await axios
        .get("https://us-central1-node-kh.cloudfunctions.net/app/slidesData")
        .then((response) => {
            return response;
        })
        .catch(() => {
            throw new Error("Http Communication Error(getMovieList)");
        });
};
