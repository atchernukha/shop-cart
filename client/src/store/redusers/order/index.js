import { CLEAR_ORDER, CREATE_ORDER } from "./types";

export default function odrerReducer(state = {}, action)  {
    switch (action.type) {
        case CREATE_ORDER:
            return { ...state, order: action.payload};
        case CLEAR_ORDER:
            return { ...state, order: null};
        default:
            return state;
    }
}
