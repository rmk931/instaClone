import { Action } from 'redux';

export interface SignupRequest extends Action {
    type: '@@auth/SIGNUP_REQUEST';
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