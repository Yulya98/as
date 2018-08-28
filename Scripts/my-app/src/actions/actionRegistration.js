import * as constants from "../constants/constants";
var axios = require('axios')

export function onChangeName(e){
    return (dispatch) => {
        dispatch(changeName(e.target.value));
    }
}

export function changeName(data){
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_NAME,
        name: data
    }
}

export function onChangeSurname(e){
    return (dispatch) => {
        dispatch(changeSurname(e.target.value));
    }
}

export function changeSurname(data){
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_SURNAME,
        surname: data
    }
}

export function onChangepPseoudonym(e){
    return (dispatch) => {
        dispatch(changePseoudonym(e.target.value));
    }
}

export function changePseoudonym(data){
    return{
        type: constants.CHANGE__PSEOUDONYM_REGISTRATION,
        pseoudonym: data
    }
}

export function onChangepEmail(e){
    return (dispatch) => {
        dispatch(changeEmail(e.target.value));
    }
}

export function changeEmail(data){
    return{
        type: constants.CHANGE__EMAIL_REGISTRATION,
        registrationEmail: data
    }
}

export function onChangepSphere(e){
    return (dispatch) => {
        dispatch(changeSphere(e.target.value));
    }
}

export function changeSphere(data){
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_SPHERE_USER,
        sphere: data
    }
}

export function onChangepCity(e){
    return (dispatch) => {
        dispatch(changeCity(e.target.value));
    }
}

export function changeCity(data){
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_CITY_USER,
        city: data
    }
}

export function onChangepPassword(e){
    return (dispatch) => {
        dispatch(changePassword(e.target.value));
    }
}

export function changePassword(data){
    return{
        type: constants.CHANGE__PASSWORD_REGISTRATION,
        registrationPassword: data
    }
}

export function visibleProfile(name,surname,pseoudonym,email,sphere,city,password){
    return (dispatch) => {
        var obj = {};
        obj.Name = name;
        obj.Surname = surname;
        obj.Pseudonym = pseoudonym;
        obj.Email = email;
        obj.FieldOfActivity = sphere;
        obj.City = city;
        obj.Password = password;
        axios.post('adduser', obj);
        this.props.visibleProfile();
        dispatch(changeProfile());
        dispatch(changeVisibleRegistration());
        dispatch(changeRegistrationUser());
    }
}

export function changeProfile(){
    return{
        type: constants.CHANGE_VISIBLE_PROFILE,
        isVisibleProfile: true
    }
}

export function changeVisibleRegistration(){
    return{
        type: constants.CHANGE_VISIBLE_REGISTRATIONS,
        isVisibleRegistration: false
    }
}

export function changeRegistrationUser(){
    return{
        type: constants.CHANGE_USER_REGISTRATION,
        isRegistrationUser: true
    }
}




