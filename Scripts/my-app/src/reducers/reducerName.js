import * as constants from "../constants/constants";

let initialState = {
    name: ""
};

export default function reducerName (state = initialState,action) {

    if(action.type === constants.INFO_ABOUT_USER_CHANGE_NAME){
        return{
            ...state,
            name:action.name
        }
    }

    return{
        ...state
    }
}