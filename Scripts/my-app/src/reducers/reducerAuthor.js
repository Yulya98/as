import * as constants from "../constants/constants";

let initialState = {
    author: []
};

export default function reducerAuthor (state = initialState,action) {

    if(action.type === constants.CHANGE_AUTHOR){
        return{
            ...state,
            author: [...state.author,action.author]
        }
    }

    if(action.type === constants.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE){
        return{
            ...state,
            author: action.author
        }
    }

    return{
        ...state
    }
}