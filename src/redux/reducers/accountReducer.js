import {actions} from './../actions/index';

const initialState = {
        isRequesting: false,
        errors: undefined,
        user: undefined,
        userInfo: {
            sub: 0,
            given_name: '',
            family_name: '',
            email: '',
        },
        loggedIn: false,
        isProgress: false,
        profileUpdate: false,
        favouriteChanged: false,
        notifications: '',
        connection_status: true,
};

export function accountReducer(state = initialState, action) {
    switch (action.type) {
        case actions.account.IS_LOGGED_IN:
            return Object.assign({}, {...state, loggedIn: true});
        case actions.account.CHANGE_LANG:
            return Object.assign(
                {},
                {
                    ...state,
                    langId: action.payload.langId,
                    lang: action.payload.langId === 'de' ? de : (action.payload.langId === 'zh' ? zh : action.payload.langId === 'md' ? md : en)
                },
            );
        case actions.account.UPDATE_FAVOURITE:
            return Object.assign(
                {},
                {
                    ...state,
                    favouriteChanged: action.payload.favouriteChanged,
                    favouriteScreen: action.payload.favouriteScreen,
                    favouriteAction: action.payload.favouriteAction,
                    favouritePartnerId: action.payload.favouritePartnerId,
                    favouriteAddressID: action.payload.favouriteAddressID,
                }
            );

        case actions.account.PROFILE_UPDATE:
            return Object.assign(
                {},
                {
                    ...state,
                    profileUpdate: action.payload.profileUpdate,
                }
            );
        case actions.account.CHANGE_CONNECTION:
            return Object.assign(
                {},
                {
                    ...state,
                    connection_status: action.payload.connection_status,
                }
            );
        default:
            return state;
    }
}
