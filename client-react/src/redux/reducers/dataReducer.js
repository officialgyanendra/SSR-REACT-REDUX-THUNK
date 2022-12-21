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
        default:
            return state;
    }

}