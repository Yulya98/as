import * as constants from "../constants/constants"

let initialState = {
    albums: []
};

export default function reducerAlbums (state = initialState,action) {

    if(action.type === constants.CHANGE_ALBUMS){
        return{
            ...state,
            albums: [...state.albums, action.albums]
        }
    }

    if(action.type === constants.CHANGE_INITIAL_STATE_MULTI_ALBUM){
        return{
            ...state,
            albums: action.albums
        }
    }

    return{
        ...state
    }
}