import * as constants from "../constants/constants";

let initialState = {
    sphere: ""
};

export default function reducerSphere (state = initialState,action) {

    if(action.type === constants.INFO_ABOUT_USER_CHANGE_SPHERE_USER){
        return{
            ...state,
            sphere: action.sphere
        }
    }

    return{
        ...state
    }
}