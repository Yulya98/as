import * as constants from "../constants/constants";

let initialState = {
    isVisibleRegistration: false
};

export default function reducerVisibleRegistration (state = initialState,action) {

    if(action.type === constants.CHANGE_VISIBLE_REGISTRATIONS){
        return{
            ...state,
            isVisibleRegistration: action.isVisibleRegistration
        }
    }

    return{
        ...state
    }
}