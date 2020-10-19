// Create Thunk based on Promise
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async (dispatch) => {
        // Start request
        dispatch({ type });
        try {
            // Assign the value in payload object
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload });
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true });
        }
    };
};

export const reducerUtils = {
    //Initial status
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),

    //Success status
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),

    // Success status
    success: (payload) => ({
        loading: false,
        data: payload,
        error: null,
    }),

    // Error status
    error: (error) => ({
        loading: false,
        data: null,
        error: error,
    }),
};

// The reducer in terms of asynchronous function
export const handleAsyncActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                };
            default:
                return state;
        }
    };
};
