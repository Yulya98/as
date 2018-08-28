import axios from "axios";
import * as constants from "../constants/constants"


export function componentDidMount() {
    return (dispatch)=> {
        let obj = {};
        obj.token = sessionStorage.getItem('token');
        debugger;
        let promise = new Promise((resolve,reject)=> {
            axios.post('aktiveusersearch', obj)
                .then((response) => {
                    dispatch(changeName(response.data));
                    dispatch(changeSurname(response.data));
                    dispatch(changeEmailUser(response.data));
                    dispatch(changeSphere(response.data));
                    dispatch(changeCity(response.data));
                });
        });
     }
}

export function changeName(data) {
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_NAME,
        name: data[0]
    }
}

export function changeSurname(data) {
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_SURNAME,
        surname: data[1],
    }
}

export function changeEmailUser(data) {
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_EMAIL_USER,
        emailUser: data[2]
    }
}

export function changeSphere(data) {
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_SPHERE_USER,
        sphere: data[3]
    }
}

export function changeCity(data) {
    return{
        type: constants.INFO_ABOUT_USER_CHANGE_CITY_USER,
        city: data[4]
    }
}


