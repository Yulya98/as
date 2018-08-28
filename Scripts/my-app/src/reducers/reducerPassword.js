import * as constants from "../constants/constants";

let initialState = {
    password: ""
};

export default function reducerPassword (state = initialState,action) {
    if(action.type === constants.CHANGE_PASSWORD){
        return{
            ...state,
            password: action.password
        }
    }

    return{
        ...state
    }
}