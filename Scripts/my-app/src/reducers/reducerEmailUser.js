import * as constantsAboutYourself from "../constants/constants";

let initialState = {
    emailUser: ""
};

export default function reducerEmailUser (state = initialState,action) {

    if(action.type === constantsAboutYourself.INFO_ABOUT_USER_CHANGE_EMAIL_USER){
        return{
            ...state,
            emailUser: action.emailUser
        }
    }

    return{
        ...state
    }
};