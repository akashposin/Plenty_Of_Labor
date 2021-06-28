
export function* login(action) {
   return action.payload
   // let result =  auth.loginUser(action.payload);
}
export function* loginFailed(action) {
    return action.payload

}
export function* loginSuccess(action) {
    return action.payload
}


export function* changeLanguage(action) {
    return action.payload;
}

export function* changeFavourite(action) {
    return action.payload;
}

export function* profileUpdate(action) {
    return action.payload;
}

export function* changeInternet(action) {
    return action.payload;
}



