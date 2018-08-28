import * as constants from "../constants/constants";
var axios = require('axios');
import React, { Component } from 'react';

export function changePosts(posts){

    return (dispatch) => {
        dispatch(post(posts))
    }
}

export function componentDidMount(changeRegistrationUser, changePosts, changeSubPosts,getItems,index,props,isRegistrationUser,changeBiggerPhotoPath,visiblePost,goToAlbum) {

    let promise = new Promise((resolve,reject )=> {
        axios.post('defineRegistrationUser')
            .then((response) => {
                changeRegistrationUser(response.data);
            });
        axios.post('searchPosts')
            .then((response) => {
                for (var i = 0; i < response.data.length; i+=5) {
                    const obj = {postId:response.data[i], authorName: response.data[i+1], src: response.data[i + 2] , idUser:response.data[i+3], idAlbum: response.data[i+4]};
                    changePosts(obj);
                }
                var subPosts = [].concat(getItems(index,props.posts,isRegistrationUser,changeBiggerPhotoPath,visiblePost,goToAlbum)).concat(getItems(index,props.posts,isRegistrationUser,changeBiggerPhotoPath,visiblePost,goToAlbum));
                changeSubPosts(subPosts);
            });
    });
}

export function post(post){
    return{
        type: constants.CHANGE_POSTS,
        posts: post
    }
}

export function changeSubPosts(subposts){
    return (dispatch) => {
        dispatch(subpost(subposts));
    }
}

export function subpost(subposts) {
    return{
        type: constants.CHANGE_SUBPOSTS,
        subposts: subposts
    }
}

export function changeCurrentImage(currentImage){
    return (dispatch) => {
        dispatch(currentImages(currentImage))
    }
}

export function currentImages(currentImage){
    return{
        type: constants.CHANGE_CURRENT_IMAGE,
        currentImage: currentImage
    }
}

export function changeLightboxIsOpen(lightboxIsOpen) {
    return (dispatch) =>{
        dispatch(lightboxesIsOpen(lightboxIsOpen))
    }
}

export function lightboxesIsOpen(lightboxIsOpen) {
    return{
        type: constants.CHANGE_LIGHTBOXES,
        lightboxIsOpen: lightboxIsOpen
    }
}

export function visiblePost(postId){
    return (dispatch) =>{
        dispatch(changeVisiblePost(true));
        dispatch(changeVisiblePostPart());
        dispatch(changePostId(postId))
    }
}

export function changeVisiblePost(flag){
    return{
        type: constants.VISIBLE_POST,
        isVisiblePost: flag,
    }
}

export function changeVisiblePostPart(){
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: false
    }
}

export function changePostId(postId){
    return{
        type: constants.VISIBLE_POST_POST_ID,
        idPost: postId
    }
}

export function goToAlbum(idUser,idAlbum){
    return (dispatch) => {
        dispatch(changeIsVisibleAlbum(true));
        dispatch(changeVisiblePostPart());
        dispatch(changeUserId(idUser));
        dispatch(changeFlag());
        dispatch(changeIdAlbum(idAlbum));
    }
}

export function changeIsVisibleAlbum(flag){
    return{
        type: constants.CHANGE_VISIBLE,
        flagForCheckAlbumInPosts: flag
    }
}

export function changeUserId(idUser){
    return{
        type: constants.CHANGE_ACTIVE_USER,
        activeUserId: idUser
    }
}

export function changeFlag(){
    return{
        type: constants.CHANGE_FLAG_PROFILE,
        flagForCheckPageCommentsOrProfile: true
    }
}

export function changeIdAlbum(idAlbum){
    return{
        type: constants.CHANGE_ALBUM_ID,
        activeAlbumId: idAlbum
    }
}


export function visiblePosts() {
    return (dispatch) => {
        dispatch(returnInInitialStatePosts());
        dispatch(changeVisiblePostPart());
        dispatch(changeIsVisibleAlbum(false))
    }
}

export function returnInInitialStatePosts(){
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: true
    }
}

export function returnInInitialState(){
    return (dispatch) => {
        dispatch(changeInitialState());
        dispatch(changeInitialStateSubPosts());
        dispatch(changeVisiblePostPart());
    }
}

export function changeInitialState(){
    return{
        type: constants.CHANGE_IN_INITIAL_STATE_IMAGES,
        posts: []
    }
}

export function changeInitialStateSubPosts() {
    return{
        type: constants.CHANGE_IN_INITIAL_STATE_SUB_POSTS,
        subPosts:[]
    }
}

export function changeRegistrationUser(flag){
    return (dispatch) => {
        dispatch(defineUser(flag));
        dispatch(defineUserProfile(flag));
    }
}

export function defineUser(flag) {
    var flagForVisibleProfile = false;
    if(flag)
        flagForVisibleProfile = true;
    return{
        type: constants.CHANGE_USER_REGISTRATION,
        isRegistrationUser: flag,
    }
}

export function defineUserProfile(flag) {
    var flagForVisibleProfile = false;
    if(flag)
        flagForVisibleProfile = true;
    return{
        type: constants.CHANGE_VISIBLE_PROFILE,
        isVisibleProfile: flagForVisibleProfile
    }
}

export function changeVisibleAuthorization(){
    return (dispatch) => {
        dispatch(visibleAuthorization());
        dispatch(changeVisiblePostPart());
    }
}

export function visibleAuthorization() {
    return{
        type: constants.CHANGE_VISIBLE_AUTHORIZATION,
        isVisibleAuthorization: true
    }
}

export function returnInInitialStatePages(){
    return (dispatch) =>{
        dispatch(initialState());
        dispatch(returnInInitialStatePosts());
        dispatch(changeVisiblePost(false));

    }
}

export function initialState() {
    return{
        type: constants.CHANGE_VISIBLE_ALBUM,
        isVisibleAlbum: false
    }
}

export function changeBiggerPhotoPath(src) {
    return (dispatch) =>{
        dispatch(changeBiggerPhoto(src));
        dispatch(changeVisibleBiggerPhoto());
        dispatch(changeVisiblePosts());
    }
}

export function changeBiggerPhoto(src) {
    return{
        type: constants.CHANGE_BIGGER_PHOTO_PATH,
        srcPhotoBigger: src
    }
}

export function changeVisibleBiggerPhoto(){
    return{
        type: constants.CHANGE_VISIBLE_BIGGER_PHOTO,
        isVisibleBiggerPhoto: true
    }
}

export function changeVisiblePosts(){
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: false
    }
}

export function getItems(i,posts,isRegistrationUser,changeBiggerPhotoPath,visiblePost,goToAlbum) {
    if(typeof posts[0] != "undefined") {
        i++;
        if (i < posts.length) {
            if (isRegistrationUser == false) {
                return (
                    <div className="post_style_mini">
                        <div className="spanMedium_mini"><span>Author name:{posts[i].authorName}</span>
                        </div>
                        <img className="image_style" src={posts[i].src}
                             onClick={() => changeBiggerPhotoPath(posts[i].src)}/>
                        <div className="button_style_mini">
                            <button className="button_style"
                                    onClick={() => visiblePost(posts[i].postId)}>
                                To comment
                            </button>
                        </div>
                    </div>
                )
            }
            else {
                return (<div className="post_style">
                    <div className="spanMedium"><span>Author name:{posts[i].authorName}</span></div>
                    <img className="image_style" src={posts[i].src}
                         onClick={() => changeBiggerPhotoPath(posts[i].src)}/>
                    <div className="button_style_position">
                        <button className="button_style"
                                onClick={() => visiblePost(posts[i].postId)}>Add comment
                        </button>
                    </div>
                    <button className="button_style" onClick={() => goToAlbum(posts[i].idUser, posts[i].idAlbum)}>To
                        Album
                    </button>

                </div>)
            }
        }
        else {
            return(
                <div></div>
            )
        }
    }
    return(
        <div>Loading...</div>
    )
}

export function handleScrollDown(getItems, subPost,changeSubPosts,i,posts,isRegistrationUser,changeBiggerPhotoPath,visiblePost,goToAlbum) {
    const subPosts = subPost.concat(getItems(i,posts,isRegistrationUser,changeBiggerPhotoPath,visiblePost,goToAlbum))
    setTimeout(() => { changeSubPosts(subPosts)}, 500)
}