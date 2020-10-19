import * as membershipAPI from "../api/membership";

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from "../lib/asyncUtils";

/* Action Type */
// Get the Experiences Object
const GET_MEMBERSHIP = "modules/GET_MEMBERSHIP"; // Request Start
const GET_MEMBERSHIP_SUCCESS = "modules/GET_MEMBERSHIP_SUCCESS"; // Request Success
const GET_MEMBERSHIP_ERROR = "modules/GET_MEMBERSHIP_ERROR"; // Request Fail

//Thunk function
export const getMembershipList = createPromiseThunk(
    GET_MEMBERSHIP,
    membershipAPI.getMembershipList
);

// initial()
const initialState = {
    membership: reducerUtils.initial(),
};

export default function membership(state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERSHIP:
        case GET_MEMBERSHIP_SUCCESS:
        case GET_MEMBERSHIP_ERROR:
            return handleAsyncActions(GET_MEMBERSHIP, "membership")(
                state,
                action
            );

        default:
            return state;
    }
}
