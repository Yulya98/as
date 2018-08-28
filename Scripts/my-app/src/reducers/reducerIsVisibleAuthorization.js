import * as constants from "../constants/constants"

let initialState = {
    isVisibleAuthorization: false
};

export default function reducerIsVisibleAuthorization (state = initialState,action) {

    if(action.type === constants.CHANGE_VISIBLE_AUTHORIZATION){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    return{
        ...state
    }
}