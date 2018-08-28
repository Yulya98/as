import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionRegistration"
import Registration from "../components/Registration"
import {withRouter} from "react-router-dom";


class ContainerRegistration extends React.Component{
    render(){
        return(
            <div>
                {this.props.reducerIsVisibleRegistration.isVisibleRegistration && <Registration password={this.props.reducerRegistrationPassword.registrationPassword} visibleProfile={this.props.visibleProfile} name={this.props.reducerName.name} surname={this.props.reducerSurname.surname} email={this.props.reducerRegistrationEmail.registrationEmail} sphere={this.props.reducerSphere.sphere} city={this.props.reducerCity.city} pseoudonym={this.props.reducerPseudonym.pseoudonym} isVisibleRegistration={this.props.reducerIsVisibleRegistration.isVisibleRegistration} onChangeName={this.props.onChangeName} onChangeSurname={this.props.onChangeSurname} onChangepPseoudonym={this.props.onChangepPseoudonym} onChangepEmail={this.props.onChangepEmail} onChangepSphere={this.props.onChangepSphere} onChangepCity={this.props.onChangepCity} onChangepPassword={this.props.onChangepPassword}></Registration>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(ContainerRegistration));