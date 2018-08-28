import * as constants from "../constants/constants";

let initialState = {
    nameImg: "Enter the name of image..."
};

export default function reducerNameImg (state = initialState,action) {

    if(action.type === constants.CHANGE_INITIAL_STATE_IMG_NAME){
        return{
            ...state,
            nameImg: ""
        }
    }

    if(action.type === constants.CHANGE_NAME_IMAGE){
        return{
            ...state,
            nameImg: action.nameImg
        }
    }

    return{
        ...state
    }
}