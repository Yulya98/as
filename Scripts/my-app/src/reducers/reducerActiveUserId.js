import * as constants from "../constants/constants";

let initialState = {
    activeUserId: ""
};

export default function reducerActiveUserId (state = initialState,action) {

    if(action.type === constants.CHANGE_ACTIVE_USER){
        return{
            ...state,
            activeUserId: action.activeUserId,
        }
    }

    return{
        ...state
    }
}