import * as constants from "../constants/constants";

let initialState = {
    srcPhotoBigger: ""
};

export default function reducerSrcPhotoBigger (state = initialState,action) {

    if(action.type === constants.CHANGE_BIGGER_PHOTO_PATH){
        return{
            ...state,
            srcPhotoBigger: action.srcPhotoBigger
        }
    }

    return{
        ...state
    }
}