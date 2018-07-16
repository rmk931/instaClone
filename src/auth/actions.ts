import { ActionCreator } from 'redux';

import * as types from './actionTypes';

export const signupRequest: ActionCreator<types.SignupRequest> = () => ({
    type: '@@auth/SIGNUP_REQUEST'
})

export const signupSuccess: ActionCreator<types.SignupSuccess> = () => ({
    type: '@@auth/SIGNUP_SUCCESS'
})

export const signupError: ActionCreator<types.SignupError> = (error: string) => ({
    type: '@@auth/SIGNUP_ERROR',
    payload: {
        error
    }
})

export const loginRequest: ActionCreator<types.LoginRequest> = () => ({
    type: '@@auth/LOGIN_REQUEST'
})

export const loginSuccess: ActionCreator<types.LoginSuccess> = () => ({
    type: '@@auth/LOGIN_SUCCESS'
})

export const loginError: ActionCreator<types.LoginError> = (error: string) => ({
    type: '@@auth/LOGIN_ERROR',
    payload: {
        error
    }
})

export const logout: ActionCreator<types.Loggout> = () => ({
    type: '@@auth/LOGOUT'
});