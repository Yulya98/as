import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionComments"
import Comments from "../components/Comments"
import {withRouter} from "react-router-dom";


class containerComments extends React.Component{
    render(){
        return(
            <div>
                <Comments changeVisibleAuthorization={this.props.changeVisibleAuthorization} changeVisibleCommentsFromNotAuthorization={this.props.changeVisibleCommentsFromNotAuthorization} isRegistrationUser={this.props.reducerIsRegistrationUser.isRegistrationUser}  returnInInitialState={this.props.returnInInitialState} componentDidMount={this.props.componentDidMount} idPost={this.props.reducerIdPost.idPost} addComment={this.props.addComment} comment={this.props.reducerComment.comment} activeUserId={this.props.reducerActiveUserId.activeUserId} author={this.props.reducerAuthor.author} data={this.props.reducerData.data} comment={this.props.reducerComment.comment} onChange={this.props.onChange} addComment={this.props.addComment}></Comments>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(containerComments));