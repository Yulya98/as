import * as constantsAuthorization from "../constants/constants";

let initialState = {
    email: ""
};

export default function reducerEmail (state = initialState,action) {
    if(action.type === constantsAuthorization.CHANGE_EMAIL) {
        return {
            ...state,
            email: action.email
        }
    }

    return{
        ...state
    }
};