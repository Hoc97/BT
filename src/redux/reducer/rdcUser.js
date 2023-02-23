const initialState = {
    list: [],
    results: [],
    team: [],
};

const rdcUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_DATA':
            return {
                ...state,
                list: payload,
            };
        case 'SET_DATA_RESULT':
            return {
                ...state,
                results: [...state?.results, payload?.results],
                team: [...state?.team, payload?.tm],
            };

        default:
            return state;
    }
};

export default rdcUser;
