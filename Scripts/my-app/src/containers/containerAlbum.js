import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAlbum"
import Album from "../components/Albom"
import { withRouter } from 'react-router-dom'


class ContainerAboutYourself extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div>
                {this.props.isVisibleAlbum && <Album activeAlbumId={this.props.reducerActiveAlbumId.activeAlbumId} flagForCheckPageCommentsOrProfile={this.props.reducerFlagForCheckPageCommentsOrProfile.flagForCheckPageCommentsOrProfile} deletePhoto={this.props.reducerDeleteItem.deletePhoto} deleteItemFromArray={this.props.deleteItemFromArray} returnInInitialState={this.props.returnInInitialState} activeUserId={this.props.reducerActiveUserId.activeUserId} loadImages={this.props.loadImages} deleteItem={this.props.reducerDeleteItem.deleteItem} nameImg={this.props.reducerNameImg.nameImg} path={this.props.reducerPath.path} images={this.props.reducerImages.images} loadData={this.props.componentWillMount} handleClicks={this.props.handleClicks} onChangeDeleteItem={this.props.onChangeDeleteItem} onChangeNameImage={this.props.onChangeNameImage} onChangePath={this.props.onChangePath} deleteButton={this.props.deleteButton}></Album>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(ContainerAboutYourself));