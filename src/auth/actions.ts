import { ActionCreator } from 'redux';

import * as interfaces from './actionInterfaces';
import * as types from './actionTypes';

export const signupRequest: ActionCreator<interfaces.SignupRequest> = (email: string, password: string, redirectTo: Function) => ({
    type: types.SIGNUP_REQUEST,
    payload: {
        email,
        password,
        redirectTo,
    }
})

export const signupSuccess: ActionCreator<interfaces.SignupSuccess> = () => ({
    type: types.SIGNUP_SUCCESS,
})

export const signupError: ActionCreator<interfaces.SignupError> = (error: string) => ({
    type: types.SIGNUP_ERROR,
    payload: {
        error
    }
})

export const loginRequest: ActionCreator<interfaces.LoginRequest> = (email: string, password: string, redirectTo: Function) => ({
    type: types.LOGIN_REQUEST,
    payload: {
        email,
        password,
        redirectTo,
    }
})

export const loginSuccess: ActionCreator<interfaces.LoginSuccess> = () => ({
    type: types.LOGIN_SUCCESS
})

export const loginError: ActionCreator<interfaces.LoginError> = (error: string) => ({
    type: types.LOGIN_ERROR,
    payload: {
        error
    }
})

export const logout: ActionCreator<interfaces.Loggout> = () => ({
    type: types.LOGOUT
});

export const isAuthRequest: ActionCreator<interfaces.IsAuthRequest> = (redirectTo: Function) => ({
    type: types.IS_AUTH_REQUEST,
    payload: {
        redirectTo
    }
});

export const isAuthResponse: ActionCreator<interfaces.IsAuthResponse> = (isAuth: boolean) => ({
    type: types.IS_AUTH_RESPONSE,
    payload: {
        isAuth
    }
});