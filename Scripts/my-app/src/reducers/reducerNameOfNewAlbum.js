import * as constants from "../constants/constants";

let initialState = {
    nameOfNewAlbum: ""
};

export default function reducerNameOfNewAlbum (state = initialState,action) {

    if(action.type === constants.CHANGE_NEW_ALBUM_NAME){
        return{
            ...state,
            nameOfNewAlbum: action.nameOfNewAlbum
        }
    }

    return{
        ...state
    }
}