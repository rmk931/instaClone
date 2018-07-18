import { takeLatest, all, put, call, ActionType } from 'redux-saga/effects';

import firebase from 'react-native-firebase';

import * as actions from './actions';
import * as interfaces from './actionInterfaces';
import * as types from './actionTypes';

function* loginSaga(action: interfaces.LoginRequest) {
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
        yield put(actions.signupError(err.message));
    }
}

function* signupSaga(action: interfaces.SignupRequest) {
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
        yield put(actions.signupError(err.message));
    }
}

function* logoutSaga(action: interfaces.Loggout) {
    yield firebase.auth().signOut().then(() => {
        action.payload.redirectTo('Loading');
    });
}

function* isAuthSaga(action: interfaces.IsAuthRequest) {
    try {
        yield firebase.auth().onAuthStateChanged((user: any) => {
            if (user) {
                actions.isAuthResponse(true);
                action.payload.redirectTo('PostList');
            } else {
                actions.isAuthResponse(false);
                action.payload.redirectTo('Login');
            }
        })
    } catch(err) {
        yield put(actions.signupError(err.message));
    }
}

export function* authSaga() {
    yield all([
        yield takeLatest(types.LOGIN_REQUEST, loginSaga),
        yield takeLatest(types.SIGNUP_REQUEST, signupSaga),
        yield takeLatest(types.IS_AUTH_REQUEST, isAuthSaga),
        yield takeLatest(types.LOGOUT, logoutSaga)
    ]);
}