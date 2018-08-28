import * as constants from "../constants/constants";

let initialState = {
    path: "Enter the path of image..."
};

export default function reducerPath (state = initialState,action) {

    if(action.type === constants.CHANGE_INITIAL_STATE_IMG_PATH){
        return{
            ...state,
            path:""

        }
    }

    if(action.type === constants.CHANGE_PATH){
        return{
            ...state,
            path: action.path
        }
    }

    return{
        ...state
    }
}