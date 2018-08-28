import * as constants from "../constants/constants"

let initialState = {
    activeAlbumId: 0
};

export default function reducerActiveAlbumId (state = initialState, action) {

    if(action.type === constants.CHANGE_ALBUM_ID){
        return{
            ...state,
            activeAlbumId: action.activeAlbumId
        }
    }

    return{
        ...state
    }
}