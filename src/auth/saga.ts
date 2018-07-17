import { takeLatest, all, put, call, ActionType } from 'redux-saga/effects';

import firebase from 'react-native-firebase';

import * as actions from './actions';
import * as types from './actionTypes';

function* loginSaga(action: types.LoginRequest) {
    try {
        yield firebase
            .auth()
            .signInAndRetrieveDataWithEmailAndPassword(action.payload.email, action.payload.password)
            .then(() => {
                action.payload.redirectTo('Main');
                actions.loginSuccess();
            })
            .catch((err) => actions.signupError(err.message))
    } catch(err) {
        yield put(actions.signupError('SignUp error'));
    }
}

function* signupSaga(action: types.SignupRequest) {
    try {
        yield firebase
            .auth()
            .createUserAndRetrieveDataWithEmailAndPassword(action.payload.email, action.payload.password)
            .then(() => {
                action.payload.redirectTo('Main');
                actions.loginSuccess();
            })
            .catch((err) => actions.signupError(err.message))
    } catch(err) {
        yield put(actions.signupError('SignUp error'));
    }
}

function* logoutSaga(action: types.Loggout) {
    try {

    } catch(err) {
        yield put(actions.signupError('SignUp error'));
    }
}

export function* authSaga() {
    yield all([
        yield takeLatest(types.LOGIN_REQUEST, loginSaga),
        yield takeLatest(types.SIGNUP_REQUEST, signupSaga),
        yield takeLatest(types.LOGOUT, logoutSaga)
    ]);
}