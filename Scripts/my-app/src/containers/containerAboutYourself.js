import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAboutYourself"
import InfoAboutYourself from "../components/AboutYourself"
import { withRouter } from 'react-router-dom'


class ContainerAboutYourself extends React.Component{
    render(){
        return(
            <div>
                <InfoAboutYourself name={this.props.reducerName.name} surname={this.props.reducerSurname.surname} email={this.props.reducerEmailUser.emailUser} sphere={this.props.reducerSphere.sphere} city={this.props.reducerCity.city} loadData={this.props.componentDidMount}></InfoAboutYourself>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect (mapStateToProps, actionCreators)(ContainerAboutYourself));