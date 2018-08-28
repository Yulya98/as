import axios from "axios";
import * as constants from "../constants/constants"

export function componentDidMount(idPost) {
    return (dispatch)=> {
        const objPost = {idPost: idPost};
        let promise = new Promise((resolve,reject )=> {
            axios.post('searchAuthor', objPost)
                .then((response) => {
                    for (var j = 0; j < response.data.length; j += 3) {
                        const obj = {
                            authorName: response.data[j],
                            pathToPage: [{src: response.data[j + 1], width: 1, height: 1}],
                            idUser: response.data[j + 2]
                        };
                        dispatch(changeAuthor(obj));
                    }
                });
        });
        promise.then(result=> {
            axios.post('searchComments', objPost)
                .then((response) => {
                    for (var j = 0; j < response.data.length; j += 2) {
                        const obj = {author: response.data[j], text: response.data[j + 1]}
                        dispatch(changeData(obj));
                    }
                });
        });
    }
}

export function changeAuthor(data){
    return{
        type: constants.CHANGE_AUTHOR,
        author: data
    }
}

export function changeData(data) {
    return{
        type:constants.CHANGE_DATA,
        data: data
    }
}

export function onChange(e) {
    return (dispatch) =>{
        dispatch(changeComment(e.target.value));
    }
}

export function changeComment(data){
    return{
        type:constants.CHANGE_COMMENT,
        comment: data
    }
}

export function addComment(idPost, comment,idActiveUser){
    return (dispatch) => {
        var obj = {};
        obj.idPost = idPost;
        obj.text = comment;
        axios.post('addComment', obj);
        const newComment ={};
        newComment.author = idActiveUser;
        newComment.text = comment;
        dispatch(commentAdd(newComment));
    }
}

export function commentAdd(comment){
    return{
        type:constants.CHANGE_DATA,
        data: comment
    }
}

export function goToAlbums(idUser) {
    return (dispatch) =>{
        dispatch(changeVisibleComments(false));
        dispatch(changeAlbumVisible());
    }
}

export function changeVisibleComments(flag) {
    return{
        type:constants.VISIBLE_POST,
        isVisiblePost: flag
    }
}

export function changeAlbumVisible() {
    return{
        type:constants.CHANGE_VISIBLE_ALBUM,
        isVisibleAlbum: true
    }
}


export function returnInInitialState(){
    return (dispatch) => {
        dispatch(changeInitialState());
        dispatch(changeInitialStateData());
        dispatch(changeInitialStateVisiblePost());
    }
}

export function changeInitialState() {
    return{
        type: constants.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE,
        author:[]
    }
}

export function changeInitialStateData(){
    return{
        type: constants.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE_DATA,
        data: []
    }
}

export function changeInitialStateVisiblePosts(flag){
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: flag
    }
}

export function changeInitialStateVisiblePost(){
    return{
        type: constants.VISIBLE_POST,
        isVisiblePost: false
    }
}

export function changeVisibleAuthorization(){
    return (dispatch) => {
        dispatch(visibleAuthorization())
        dispatch(changeInitialStateVisiblePosts(false))
    }
}

export function visibleAuthorization() {
    return{
        type: constants.CHANGE_VISIBLE_AUTHORIZATION,
        isVisibleAuthorization: true
    }
}

export function changeVisibleCommentsFromNotAuthorization(){
    return (dispatch) => {
        dispatch(changeVisibleComments(false));
        dispatch(changeInitialStateVisiblePosts(true));
    }
}
