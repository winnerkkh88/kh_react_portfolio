import axios from "axios";
import { sleep } from "./experiences";

// Getting the movieList
export const getMovieList = async () => {
    await sleep(500); // wait for 0.5 seconds

    return await axios
        .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        .then((response) => {
            return response;
        })
        .catch(() => {
            throw new Error("Http Communication Error(getMovieList)");
        });
};
