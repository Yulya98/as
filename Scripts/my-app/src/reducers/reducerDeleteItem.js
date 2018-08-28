import * as constantsAlbum from "../constants/constants";

let initialState = {
    deleteItem: "Enter the name of image..."
};

export default function reducerDeleteItem (state = initialState,action) {

    if(action.type === constantsAlbum.CHANGE_DELETE_ITEM){
        return{
            ...state,
            deleteItem: action.deleteItem
        }
    }

    return{
        ...state
    }
};