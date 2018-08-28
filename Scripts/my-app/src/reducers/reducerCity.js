import * as constants from "../constants/constants"

let initialState = {
    city: ""
};

export default function reducerCity (state = initialState,action)  {

    if(action.type === constants.INFO_ABOUT_USER_CHANGE_CITY_USER){
        return{
            ...state,
            city: action.city
        }
    }

    if(action.type === constants.CHANGE__CITY_REGISTRATION){
        return{
            ...state,
            city: action.city
        }
    }

    return{
        ...state
    }
}