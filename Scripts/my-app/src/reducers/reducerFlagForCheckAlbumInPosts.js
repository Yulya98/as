import * as constants from "../constants/constants"

let initialState = {
    flagForCheckAlbumInPosts: false
};

export default function reducerFlagForCheckPageCommentsOrProfile (state = initialState,action) {
    if(action.type === constants.CHANGE_VISIBLE){
        return{
            ...state,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }
    return{
        ...state
    }
}