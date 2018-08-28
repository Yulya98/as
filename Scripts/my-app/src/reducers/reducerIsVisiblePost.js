import * as constants from "../constants/constants";

let initialState = {
    isVisiblePost: false
};

export default function reducerVisiblePost (state = initialState,action) {

    if(action.type === constants.VISIBLE_POST){
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
        }
    }

    return{
        ...state
    }
}