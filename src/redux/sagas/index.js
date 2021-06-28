import {all, takeLatest} from 'redux-saga/effects';

import * as AccountSagas from './accountSagas';

import {actions} from '../actions/index';

export default function* sagas() {
  yield all([
    takeLatest(actions.account.IS_LOGGED_IN, AccountSagas.loginSuccess),
    takeLatest(actions.account.LOGIN_FAILED, AccountSagas.loginFailed),
    takeLatest(actions.account.LOGIN_CALL, AccountSagas.login),

    takeLatest(actions.account.CHANGE_LANG, AccountSagas.changeLanguage),
    takeLatest(actions.account.UPDATE_FAVOURITE, AccountSagas.changeFavourite),
    takeLatest(actions.account.PROFILE_UPDATE, AccountSagas.profileUpdate),
    takeLatest(actions.account.CHANGE_CONNECTION, AccountSagas.changeInternet),
  ]);
}
