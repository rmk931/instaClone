import { Reducer } from 'redux';

import * as types from './actionTypes';

export interface AuthReducerState {
    isAuth: boolean;
    user: object;
    error: string;
};

export const initialState: AuthReducerState = {
    isAuth: false,
    user: {},
    error: ''
};

export const authReducer: Reducer<AuthReducerState> = (state: AuthReducerState = initialState, action) => {
    switch ((action as types.AuthActions).type) {
        case '@@auth/LOGIN_SUCCESS': 
        case '@@auth/SIGNUP_SUCCESS':
            return {
                ...state,
                isAuth: true
            };
        case '@@auth/LOGIN_ERROR':
        case '@@auth/SIGNUP_ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        case '@@auth/LOGOUT': 
            return {
                ...state,
                isAuth: false
            }
        default: 
            return state;
            
    }
}


