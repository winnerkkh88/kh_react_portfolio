import * as experiencesAPI from "../api/experiences";
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from "../lib/asyncUtils";

/* Action Type */
// Get the Experiences Object
const GET_EXPERIENCES = "modules/GET_EXPERIENCES"; // Request Start
const GET_EXPERIENCES_SUCCESS = "modules/GET_EXPERIENCES_SUCCESS"; // Request Success
const GET_EXPERIENCES_ERROR = "modules/GET_EXPERIENCES_ERROR"; // Request Fail

//Thunk function
export const getExperiences = createPromiseThunk(
    GET_EXPERIENCES,
    experiencesAPI.getExperiences
);

// initial()
const initialState = {
    experiences: reducerUtils.initial(),
};

// experiences
export default function experiences(state = initialState, action) {
    switch (action.type) {
        case GET_EXPERIENCES:
        case GET_EXPERIENCES_SUCCESS:
        case GET_EXPERIENCES_ERROR:
            return handleAsyncActions(GET_EXPERIENCES, "experiences")(
                state,
                action
            );

        default:
            return state;
    }
}
