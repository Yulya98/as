import * as constants from "../constants/constants";

let initialState = {
    isVisibleMultiAlbums: false
};

export default function reducerIsVisibleBiggerPhoto (state = initialState,action) {

    if(action.type === constants.CHANGE_VISIBLE_CHECK_MULTI_ALBUM_FROM_PROFILE){
        return {
            ...state,
            isVisibleMultiAlbums: action.isVisibleMultiAlbums
        }
    }

    return{
        ...state
    }
}