import { Action } from 'redux';

export const SIGNUP_REQUEST = '@@auth/SIGNUP_REQUEST'
export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST'
export const LOGOUT = '@@auth/LOGOUT'

export interface SignupRequest extends Action {
    type: '@@auth/SIGNUP_REQUEST';
    payload: {
        email: string;
        password: string;
        redirectTo: Function;
    }
}

export interface SignupSuccess extends Action {
    type: '@@auth/SIGNUP_SUCCESS';
}

export interface SignupError extends Action {
    type: '@@auth/SIGNUP_ERROR';
    payload: {
        error: string
    }
}

export interface LoginRequest extends Action {
    type: '@@auth/LOGIN_REQUEST';
    payload: {
        email: string;
        password: string;
        redirectTo: Function;
    }
}

export interface LoginSuccess extends Action {
    type: '@@auth/LOGIN_SUCCESS';
}

export interface LoginError extends Action {
    type: '@@auth/LOGIN_ERROR';
    payload: {
        error: string
    }
}

export interface Loggout extends Action {
    type: '@@auth/LOGOUT';
}

export type AuthActions = SignupRequest | SignupError | SignupSuccess |
                          Loggout | LoginSuccess | LoginRequest | LoginError;