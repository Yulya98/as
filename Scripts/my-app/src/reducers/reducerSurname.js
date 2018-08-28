import * as constants from "../constants/constants";

let initialState = {
    surname: ""
};

export default function reducerSurname (state = initialState,action) {

    if(action.type === constants.INFO_ABOUT_USER_CHANGE_SURNAME){
        return{
            ...state,
            surname:action.surname
        }
    }

    return{
        ...state
    }
}