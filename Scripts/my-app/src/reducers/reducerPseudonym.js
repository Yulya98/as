import * as constants from "../constants/constants";

let initialState = {
    pseoudonym: ""
};

export default function reducerPseudonym (state = initialState,action) {

    if(action.type === constants.CHANGE__PSEOUDONYM_REGISTRATION){
        return{
            ...state,
            pseoudonym: action.pseoudonym
        }
    }

    return{
        ...state
    }
}