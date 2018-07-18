import { Reducer } from 'redux';

import { AuthActions } from './actionInterfaces';
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
    switch ((action as AuthActions).type) {
        case types.LOGIN_SUCCESS: 
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuth: true,
                error: ''
            };
        case types.LOGIN_ERROR:
        case types.SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        case types.LOGOUT: 
            return {
                ...state,
                isAuth: false
            }
        case types.IS_AUTH_RESPONSE:
            return {
                ...state,
                isAuth: action.payload.isAuth
            }
        default: 
            return state;
            
    }
}


