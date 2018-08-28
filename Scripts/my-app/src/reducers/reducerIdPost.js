import * as constants from "../constants/constants";

let initialState = {
    idPost: ""
};

export default function reducerIdPost (state = initialState,action) {

    if(action.type === constants.VISIBLE_POST_POST_ID){
        return{
            ...state,
            idPost: action.idPost,
        }
    }

    return{
        ...state
    }
}