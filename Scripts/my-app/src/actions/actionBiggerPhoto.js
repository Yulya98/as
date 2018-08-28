import * as constants from "../constants/constants"

export function changeVisibleBiggerPhoto(){
    return (dispatch) =>{
        dispatch(VisibleBiggerPhoto());
        dispatch(visibleBiggerPhotoPosts())
    }
}

export function VisibleBiggerPhoto(){
    return{
        type: constants.CHANGE_VISIBLE_BIGGER_PHOTO,
        isVisibleBiggerPhoto: false
    }
}

export function returnInInitialStateVisible(){
    return (dispatch) =>{
        dispatch(VisibleBiggerPhoto());
    }
}

export function visibleBiggerPhotoPosts() {
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: true
    }
}