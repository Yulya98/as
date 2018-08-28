import * as constants from "../constants/constants"


export function changeVisibleAlbom(){
    return (dispatch) => {
        dispatch(changeFlagForCheckAlbumInPosts());
        dispatch(changeVisibleComments());
        dispatch(changeVisibleBiggerPhoto());
        dispatch(visibleAlbum(false));
        dispatch(changePostsVisible(false));
        dispatch(changeVisibleInformationFlag(false));
        dispatch(checkAlbum(false));
        dispatch(checkmMultiAlbum(true));
    }
}

export function visibleAlbum(flag) {
    return{
        type: constants.CHANGE_VISIBLE_ALBUM,
        isVisibleAlbum: flag
    }
}

export function changePostsVisible(flag){
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: flag
    }
}

export function changeVisibleInformationFlag(flag){
    return{
        type: constants.CHANGE_VISIBLE_INFORMATION_FROM_PROFILE,
        isVisibleInformation: flag
    }
}

export function checkAlbum(flag){
    return{
        type: constants.CHANGE_VISIBLE,
        flagForCheckAlbumInPosts: flag
    }
}

export function checkmMultiAlbum(flag){
    return{
        type: constants.CHANGE_VISIBLE_CHECK_MULTI_ALBUM_FROM_PROFILE,
        isVisibleMultiAlbums: flag
    }
}

export function changeVisibleInformation(){

    return (dispatch) => {
        dispatch(changeVisibleComments());
        dispatch(changeVisibleBiggerPhoto());
        dispatch(changeFlagForCheckAlbumInPosts());
        dispatch(visibleAlbum(false));
        dispatch(changePostsVisible(false));
        dispatch(changeVisibleInformationFlag(true));
        dispatch(checkAlbum(false));
        dispatch(checkmMultiAlbum(false));
    }
}

export function changeVisibleComments(){
    return{
        type: constants.VISIBLE_POST,
        isVisiblePost: false
    }
}

export function changeVisibleBiggerPhoto() {
    return{
        type: constants.CHANGE_VISIBLE_BIGGER_PHOTO,
        isVisibleBiggerPhoto: false
    }
}

export function changeFlagForCheckAlbumInPosts(){
    return{
        type: constants.CHANGE_VISIBLE,
        flagForCheckAlbumInPosts: false
    }
}


export function changeVisiblePosts(){
    return (dispatch) => {
        dispatch(changeFlagForCheckAlbumInPosts());
        dispatch(changeVisibleComments());
        dispatch(changeVisibleBiggerPhoto());
        dispatch(visibleAlbum(false));
        dispatch(changePostsVisible(true));
        dispatch(changeVisibleInformationFlag(false));
        dispatch(checkAlbum(false));
        dispatch(checkmMultiAlbum(false));
    }
}