import * as movieListAPI from "../api/movieList";
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from "../lib/asyncUtils";

/* Action Type */
// Get the movieList Object
const GET_MOVIELIST = "modules/GET_MOVIELIST"; // Request Start
const GET_MOVIELIST_SUCCESS = "modules/GET_MOVIELIST_SUCCESS"; // Request Success
const GET_MOVIELIST_ERROR = "modules/GET_MOVIELIST_ERROR"; // Request Fail

//Thunk function
export const getMovieList = createPromiseThunk(
    GET_MOVIELIST,
    movieListAPI.getMovieList
);

// initial()
const initialState = {
    movieList: reducerUtils.initial(),
};

// movieList
export default function movieList(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIELIST:
        case GET_MOVIELIST_SUCCESS:
        case GET_MOVIELIST_ERROR:
            return handleAsyncActions(GET_MOVIELIST, "movieList")(
                state,
                action
            );

        default:
            return state;
    }
}
