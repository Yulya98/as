import * as constants from "../constants/constants";

let initialState = {
    subPosts: []
};

export default function reducerSubPosts (state = initialState,action) {

    if(action.type === constants.CHANGE_SUBPOSTS){
        return {
            ...state,
            subPosts: [...state.subPosts,action.subposts]
        }
    }

    if(action.type === constants.CHANGE_IN_INITIAL_STATE_SUB_POSTS) {
        return {
            ...state,
            subPosts: action.subPosts
        }
    }

    return{
        ...state
    }
}