import * as constants from "../constants/constants"

let initialState = {
    isVisibleBiggerPhoto: false
};

export default function reducerIsVisibleBiggerPhoto (state = initialState,action) {

    if(action.type === constants.CHANGE_VISIBLE_BIGGER_PHOTO){
        return{
            ...state,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto
        }
    }

    return{
        ...state
    }
}