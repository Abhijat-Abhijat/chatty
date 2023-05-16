export const initialState = {
    user: null,
    // darkMode: false,
};

export const actionTypes = {
    SET_USER: "SET_USER",

};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        // case actionTypes.SET_DARK_MODE:
        default:
            return state;
    }
};

export default reducer;

// import Sidebar from './Sidebar';
