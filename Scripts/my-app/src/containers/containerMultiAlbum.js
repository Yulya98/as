import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionMultiAlbum"
import MultiAlbum from "../components/MultiAlbum"
import {withRouter} from "react-router-dom";


class containerMultiAlbum extends React.Component{
    render(){
        return(
            <div>
                <MultiAlbum addAlbum={this.props.addAlbum} changeNewAlbumName={this.props.changeNewAlbumName} nameOfNewAlbum={this.props.reducerNameOfNewAlbum.nameOfNewAlbum} returnInInitialState={this.props.returnInInitialState} flagForCheckPageCommentsOrProfile={this.props.flagForCheckPageCommentsOrProfile} componentWillMount={this.props.componentWillMount} activeUserId={this.props.reducerActiveUserId.activeUserId} getAlbum={this.props.getAlbum} albums={this.props.reducerAlbum.albums} changeVisibleMultiAlbums={this.props.changeVisibleMultiAlbums}></MultiAlbum>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(containerMultiAlbum));