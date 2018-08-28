import * as constants from "../constants/constants";

let initialState = {
    comment: ""
};

export default function reducerComment (state = initialState,action) {

    if(action.type === constants.CHANGE_COMMENT){
        return{
            ...state,
            comment: action.comment
        }
    }

    return{
        ...state
    }
}