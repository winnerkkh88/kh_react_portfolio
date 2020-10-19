import * as slidesDataAPI from "../api/slidesData";
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from "../lib/asyncUtils";

/* Action Type */
// Get the Experiences Object
const GET_SLIDESDATA = "modules/GET_SLIDESDATA"; // Request Start
const GET_SLIDESDATA_SUCCESS = "modules/GET_SLIDESDATA_SUCCESS"; // Request Success
const GET_SLIDESDATA_ERROR = "modules/GET_SLIDESDATA_ERROR"; // Request Fail

//Thunk function
export const getSlidesData = createPromiseThunk(
    GET_SLIDESDATA,
    slidesDataAPI.getSlidesData
);

// initial()
const initialState = {
    slidesData: reducerUtils.initial(),
};

export default function slidesData(state = initialState, action) {
    switch (action.type) {
        case GET_SLIDESDATA:
        case GET_SLIDESDATA_SUCCESS:
        case GET_SLIDESDATA_ERROR:
            return handleAsyncActions(GET_SLIDESDATA, "slidesData")(
                state,
                action
            );

        default:
            return state;
    }
}
