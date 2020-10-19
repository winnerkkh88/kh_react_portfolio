import { combineReducers } from "redux";
import experiences from "./experiences";
import movieList from "./movieList";
import slidesData from "./slidesData";
import membership from "./membership";

//combine all reducers into rootReducer varable.
const rootReducer = combineReducers({
    experiences,
    movieList,
    slidesData,
    membership,
});

export default rootReducer;
