import * as constants from "../constants/constants";

let initialState = {
    images: []
};

export default function reducerImages (state = initialState,action) {

    if(action.type === constants.CHANGE_IMAGES){
        return{
            ...state,
            images: [...state.images,action.images]
        }
    }

    if(action.type === constants.DELETE_PHOTO_FROM_IMAGES){
        return{
            ...state,
            images: action.images,
        }
    }

    return{
        ...state
    }
}