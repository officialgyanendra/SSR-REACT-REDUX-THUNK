import { ActionTypes } from "../constants/action-types"

const initialState = {
    data: []
}
export const dataListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_DATA:
            return { ...state, data: payload};
        case ActionTypes.FETCH_APIDATA:
            return { ...state, data: payload};
        case ActionTypes.SELECTED_DETAIL:
            return { ...state, selectedData: payload };
        // case ActionTypes.REMOVE_SELECTED_DETAILS:
        //     return { };
        default:
            return state;
    }

}

// export const selectedListReducer = (state = {}, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.SELECTED_DETAIL:
//             return { ...state, ...payload };
//         case ActionTypes.REMOVE_SELECTED_DETAILS:
//             return { };
//         default:
//             return state;
//     }

// }