import * as constants from "../constants/constants";

let initialState = {
    data: []
};

export default function reducerData (state = initialState,action){

    if(action.type === constants.CHANGE_DATA){
        return{
            ...state,
            data:[...state.data,action.data]
        }
    }

    if(action.type === constants.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE_DATA){
        return{
            ...state,
            data: action.data
        }
    }

    return{
        ...state
    }
}