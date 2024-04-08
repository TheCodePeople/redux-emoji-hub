import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';

let initialState = {
    emojis: [],
};

function emojiReducer(state = initialState, action) {
    switch (action.type) {
        case "emoji/get":
            return { ...state, emojis: action.payload };
        default:
            break;
    }

    return state;
}

const store = createStore(emojiReducer, applyMiddleware(thunk));

export function getEmojis() {
    return async (dispatch) => {
        try {
            const res = await fetch("https://emojihub.yurace.pro/api/all");
            const data = await res.json();
            dispatch({ type: "emoji/get", payload: data });
        } catch (error) {
            console.error("Error fetching emojis:", error);
        }
    };
}


export default store;
