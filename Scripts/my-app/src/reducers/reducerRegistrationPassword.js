import * as constants from "../constants/constants";

let initialState = {
    registrationPassword: ""
};

export default function reducerRegistrationPassword (state = initialState,action) {

    if(action.type === constants.CHANGE__PASSWORD_REGISTRATION){
        return{
            ...state,
            registrationPassword: action.registrationPassword
        }
    }

    return{
        ...state
    }
}