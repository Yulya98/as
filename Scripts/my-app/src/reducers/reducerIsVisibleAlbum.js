import * as constants from "../constants/constants"

let initialState = {
    isVisibleAlbum: false
};

export default function reducerIsVisibleAlbum  (state = initialState,action) {

    if(action.type === constants.CHANGE_VISIBLE_ALBUM){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    return{
        ...state
    }
}