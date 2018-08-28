import * as constants from "../constants/constants";

const initialState = {
    posts: []
};

export default function reducerPosts  (state = initialState,action) {

    if(action.type === constants.CHANGE_POSTS){
        return{
            ...state,
            posts:[...state.posts,action.posts]
        }
    }

    if(action.type === constants.CHANGE_IN_INITIAL_STATE_IMAGES) {
        return {
            ...state,
            posts: action.posts
        }
    }

    return{
        ...state
    }
}