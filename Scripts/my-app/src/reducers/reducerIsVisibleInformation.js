import * as constants from "../constants/constants";

let initialState = {
    isVisibleInformation: false
};

export default function reducerIsVisibleInformation (state = initialState,action)  {

    if(action.type === constants.CHANGE_VISIBLE_INFORMATION_FROM_PROFILE){
        return {
            ...state,
            isVisibleInformation:action.isVisibleInformation
        }
    }

    return{
        ...state
    }
}