import * as constants from "../constants/constants"

let initialState = {
    flagForCheckPageCommentsOrProfile: false
};

export default function reducerFlagForCheckPageCommentsOrProfile (state = initialState,action) {

    if(action.type === constants.CHANGE_FLAG_PROFILE){
        return{
            ...state,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    return{
        ...state
    }
}