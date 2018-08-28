import * as constants from "../constants/constants";

let initialState = {
    isRegistrationUser: false
};

export default function reducerRegistrationUser (state = initialState,action) {

    if(action.type === constants.CHANGE_USER_REGISTRATION){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser
        }
    }

    return{
        ...state
    }
}