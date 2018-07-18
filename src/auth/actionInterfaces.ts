import { Action } from 'redux';

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
    payload: {
        redirectTo: Function;
    }
}

export interface IsAuthRequest extends Action {
    type: '@@auth/IS_AUTH_REQUEST';
    payload: {
        redirectTo: Function;
    }
}

export interface IsAuthResponse extends Action {
    type: '@@auth/IS_AUTH_RESPONSE';
    payload: {
        isAuth: boolean
    }
}

export type AuthActions = SignupRequest | SignupError | SignupSuccess | IsAuthRequest |
                          Loggout | LoginSuccess | LoginRequest | LoginError | IsAuthResponse;