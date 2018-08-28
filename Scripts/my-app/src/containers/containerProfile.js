import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionProfile"
import Profile from "../components/Profile"
import {withRouter} from "react-router-dom";


class ContainerProfile extends React.Component{

    render(){
        return(
            <div>
                <Profile changeVisiblePosts={this.props.changeVisiblePosts} changeVisibleInformation={this.props.changeVisibleInformation} changeVisibleAlbom={this.props.changeVisibleAlbom}></Profile>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps,actionCreators)(ContainerProfile));