import React, { Component } from 'react';
var axios = require('axios');
import "../resources/css/posts/posts.css"
import InfiniteScroll from 'react-bidirectional-infinite-scroll'
import {isAuthenticated} from '../constants/constants'


var i = -1;
export default class Posts extends React.Component {


    constructor(props) {
        super(props);

        this.handleScrollDown = this.handleScrollDown.bind(this);

        this.handleOnScroll = this.handleOnScroll.bind(this);

        this.handleClick = this.handleClick.bind(this);

        this.goToAlbum = this.goToAlbum.bind(this);
    }

    handleClick(postId){
        this.props.visiblePost(postId);
    }

    goToAlbum(idUser,idAlbum){
        this.props.goToAlbum(idUser,idAlbum);
    }


    componentDidMount() {
        // this.props.componentDidMount();

        let promise = new Promise((resolve,reject )=> {
            axios.post('defineRegistrationUser')
                .then((response) => {
                    this.props.changeRegistrationUser(response.data);
                });
            axios.post('searchPosts')
                .then((response) => {
                    for (var i = 0; i < response.data.length; i+=5) {
                        const obj = {postId:response.data[i], authorName: response.data[i+1], src: response.data[i + 2] , idUser:response.data[i+3], idAlbum: response.data[i+4]};
                        this.props.changePosts(obj);
                    }
                    var subPosts = [].concat(this.getItems()).concat(this.getItems());
                    this.props.changeSubPosts(subPosts);
                });
        });
    }

    getItems() {
        if(typeof this.props.posts[0] != "undefined") {
            i++;
            if (i < this.props.posts.length) {
                console.log(this.props.isRegistrationUser);
                if (isAuthenticated.isAuthenticated == false) {
                    return (
                        <div className="post_style_mini">
                            <div className="spanMedium_mini"><span>Author name:{this.props.posts[i].authorName}</span>
                            </div>
                            <img className="image_style" src={this.props.posts[i].src}
                                 onClick={() => this.props.changeBiggerPhotoPath(this.props.posts[i].src)}/>
                            <div className="button_style_mini">
                                <button className="button_style"
                                        onClick={() => this.handleClick(this.props.posts[i].postId)}>
                                    To comment
                                </button>
                            </div>
                        </div>
                    )
                }
                else {
                    return (<div className="post_style">
                        <div className="spanMedium"><span>Author name:{this.props.posts[i].authorName}</span></div>
                        <img className="image_style" src={this.props.posts[i].src}
                             onClick={() => this.props.changeBiggerPhotoPath(this.props.posts[i].src)}/>
                        <div className="button_style_position">
                            <button className="button_style"
                                    onClick={() => this.handleClick(this.props.posts[i].postId)}>Add comment
                            </button>
                        </div>
                        <button className="button_style" onClick={() => this.goToAlbum(this.props.posts[i].idUser, this.props.posts[i].idAlbum)}>To
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


    handleScrollDown() {
        const subPosts = this.props.subPosts.concat(this.getItems())
        setTimeout(() => { this.props.changeSubPosts(subPosts)}, 500)
    }

    handleOnScroll (position, previousPosition) {
        const diffScroll = position - previousPosition
        const direction = diffScroll > 0
            ? 'down'
            : 'up'

        console.log(`Scroll ${direction} to ${position}`)
    }

    componentWillUnmount(){
        i = -1;
        this.props.returnInInitialState();
    }

    render() {
        if (typeof this.props.posts[0] != "undefined") {
            console.log(this.props.isRegistrationUser);
            if(isAuthenticated.isAuthenticated != false) {
                return (
                    <div className="posts_style">
                        <div className="post_scroll">
                            <InfiniteScroll onReachBottom={this.handleScrollDown}
                                            onScroll={this.handleOnScroll}
                                            position={10}>
                                {this.props.subPosts}
                            </InfiniteScroll>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <div className="change_location_button"> <button className="button_style_not_authorization_user" onClick={()=>this.props.changeVisibleAuthorization()}>Registration</button></div>
                    <div className="posts_style_mini">
                        <div className="post_scroll_mini">
                            <InfiniteScroll onReachBottom={this.handleScrollDown}
                                            onScroll={this.handleOnScroll}
                                            position={10}>
                                {this.props.subPosts}
                            </InfiniteScroll>
                        </div>
                    </div>
                    </div>
                )
            }
        }
        if(isAuthenticated.isAuthenticated != false) {
            return (
                <div className="load_style">Loading...</div>
            )
        }
        else{
            return (
                <div className="load_style_mini">Loading...</div>
            )
        }
    }
}
