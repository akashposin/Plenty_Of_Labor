import axiosInstance from "./index";
import apiList from "./apiList";

/**
 * this method is configure a base url of server and return a axios instance
 * @type {AxiosInstance}
 */

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};


export const loginUser = (data) => {
    return (dispatch, getState) => {

        let result =  axiosInstance.post(apiList.LOGIN, data, config).then((response) => {
            if (result.data.success === 'true') {
                // Login the user using dispatch
                dispatch(loginSuccess(result));
            } else {
                // Send the error from API back
                dispatch(loginFailed(result));
            }
        });
    }
}

export const loginSuccess = (user) => {
    return {
        type: 'LOGGED_IN_USER',
        payload: user
    };
};


export const loginFailed = (error) => {
    return {
        type: 'LOGGED_IN_USER',
        payload: error
    };
};



