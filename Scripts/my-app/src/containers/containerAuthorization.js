import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAthorization.js"
import Authorization from "../components/Authorization"
import {withRouter} from "react-router-dom";


class ContainerAuthorization extends React.Component{
    render(){
        return(
            <div>
                <Authorization isRegistrationUser={this.props.reducerRegistrationUser.isRegistrationUser} onChangeRedirectToReferrer={this.props.onChangeRedirectToReferrer} changeRgistrationUser={this.props.changeRgistrationUser} visibleProfile={this.props.changeVisibleRegistrations} email={this.props.reducerEmail.email} password={this.props.reducerPassword.password} handleSubmit={this.props.handleSubmit} changeEmail={this.props.onChangeEmail} changePassword={this.props.onChangePassword}></Authorization>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(ContainerAuthorization));