import fetchingData from '../../apis/fetchingData';
import { ActionTypes } from "../constants/action-types"

export const fetchData = () => async (dispatch) => {
    fetchingData.get("/api")
        .then((res) =>
            dispatch({ type: ActionTypes.FETCH_APIDATA, payload: res.data })
        )

}

export const fetchSelectedDetails = (id) => async (dispatch) => {
    fetchingData.get(`/api/details/${id}`)
    .then((res)=>{
        dispatch({type: ActionTypes.SELECTED_DETAIL, payload: res.data})
    })
}

export const setData = (allData) => {
    return {
        type: ActionTypes.SET_DATA,
        payload: allData
    }
}

export const selectedDetail = (details) => {
    return {
        type: ActionTypes.SELECTED_DETAIL,
        payload: details
    }
}



// export const RemoveSelectedDetail = () => {
//     return {
//         type: ActionTypes.REMOVE_SELECTED_DETAILS,
//     }
// }