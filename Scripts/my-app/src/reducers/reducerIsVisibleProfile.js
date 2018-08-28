import * as constants from "../constants/constants";

let initialState = {
    isVisibleProfile: false
};

export default function reducerIsVisibleProfile (state = initialState,action) {

    if(action.type === constants.CHANGE_VISIBLE_PROFILE){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile
        }
    }

    return{
        ...state
    }
}