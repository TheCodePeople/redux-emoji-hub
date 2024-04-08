import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

let initialState = {
  emojis: [],
};

export function getEmojis() {
  return function (dispatch) {
    fetch("https://emojihub.yurace.pro/api/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "emoji/get", payload: data });
      });
  };
}

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
export default store;
