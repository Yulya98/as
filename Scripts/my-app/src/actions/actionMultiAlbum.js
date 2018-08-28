import axios from "axios";
import * as constants from "../constants/constants"


export function componentWillMount(flagForCheckPage){

    return(dispatch) => {
        if(!flagForCheckPage) {
            dispatch(searchActiveUserIdFromProfile(sessionStorage.getItem('token')));
        }
        else {
            dispatch(searchActiveUserIdFromComments())
        }
    }
}

export function searchActiveUserIdFromProfile(data){
    return{
        type: constants.CHANGE_ACTIVE_USER,
        activeUserId: data,
        flagForCheckPage: false
    }
}

export function searchActiveUserIdFromComments(){
    return{
        type: constants.CHANGE_FLAG_PROFILE,
        flagForCheckPageCommentsOrProfile: false
    }
}

export function getAlbum() {
    return (dispatch) => {
        var obj = {};
        obj.token = sessionStorage.getItem('token');
        axios.post('searchAlbum', obj)
            .then((response) => {
                for(var i=0;i<response.data.length;i+=2) {
                    var obj ={};
                    obj.idAlbum = response.data[i];
                    obj.nameAlbum = response.data[i+1];
                    dispatch(changeAlbumsData(obj))
                }
            })
    }
}

export function changeAlbumsData(data) {
    return{
        type: constants.CHANGE_ALBUMS,
        albums: data
    }
}

export function addAlbum(activeUserId,nameOfAlbum) {
    return (dispatch) => {
        var obj = {};
        obj.token = sessionStorage.getItem('token');
        obj.userId = activeUserId;
        obj.nameOfAlbum = nameOfAlbum;
        axios.post('addAlbum', obj)
            .then((response) => {
                var obj ={};
                obj.idAlbum = response.data[0];
                obj.nameAlbum = nameOfAlbum;
                dispatch(addAlbumsData(obj));
            })
    }
}

export function addAlbumsData(obj) {
    return{
        type: constants.CHANGE_ALBUMS,
        albums: obj
    }
}

export function changeVisibleMultiAlbums(activeAlbumId){
    return (dispatch) => {
        debugger;
        dispatch(visibleMultiAlbum(activeAlbumId));
        dispatch(visibleAlbum());
        dispatch(changeIdAlbum(activeAlbumId));
    }
}

export function visibleMultiAlbum() {
    return{
        type: constants.CHANGE_VISIBLE_CHECK_MULTI_ALBUM_FROM_PROFILE,
        isVisibleMultiAlbums: false
    }
}

export function visibleAlbum() {
    return{
        type: constants.CHANGE_VISIBLE_ALBUM,
        isVisibleAlbum: true
    }
}

export function changeIdAlbum(activeAlbumId) {
    return{
        type: constants.CHANGE_ALBUM_ID,
        activeAlbumId: activeAlbumId
    }
}

export function returnInInitialState(){
    return (dispatch) => {
        dispatch(changeInitialState());
    }
}

export function changeInitialState(){
    return{
        type: constants.CHANGE_INITIAL_STATE_MULTI_ALBUM,
        albums: []
    }
}

export function changeNewAlbumName(e) {
    return (dispatch) => {
        dispatch(changeAlbomName(e.target.value));
    }
}

export function changeAlbomName(data) {
    return{
        type: constants.CHANGE_NEW_ALBUM_NAME,
        nameOfNewAlbum: data
    }
}



