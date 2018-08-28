import * as constants from "../constants/constants";

let initialState = {
    registrationEmail: ""
};

export default function reducerRegistrationEmail (state = initialState,action) {

    if(action.type === constants.CHANGE__EMAIL_REGISTRATION){
        return{
            ...state,
            registrationEmail: action.registrationEmail
        }
    }

    return{
        ...state
    }
}