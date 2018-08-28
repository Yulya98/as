import * as constants from "../constants/constants";

let initialState = {
    isVisiblePosts: true
};

export default function reducerIsVisiblePosts (state = initialState,action) {

    if(action.type === constants.VISIBLE_POST_PART){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
        }
    }

    return{
        ...state
    }
}