import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionBiggerPhoto"
import BiggerPhoto  from "../components/BigerPhoto"
import {withRouter} from "react-router-dom";


class ContainerBiggerPhoto extends React.Component{
    render(){
        return(
            <div>
                 <BiggerPhoto returnInInitialStateVisible={this.props.returnInInitialStateVisible} srcPhotoBigger={this.props.reducerSrcPhotoBigger.srcPhotoBigger} changeVisibleBiggerPhoto={this.props.changeVisibleBiggerPhoto}></BiggerPhoto>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(ContainerBiggerPhoto));