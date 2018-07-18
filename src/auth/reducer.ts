import { Reducer } from 'redux';

import { AuthActions } from './actionInterfaces';
import * as types from './actionTypes';
import { User } from '../types';

export interface AuthReducerState {
    isAuth: boolean;
    user: User;
    error: string;
};

export const initialState: AuthReducerState = {
    isAuth: false,
    user: {
        email: ''
    },
    error: ''
};

export const authReducer: Reducer<AuthReducerState> = (state: AuthReducerState = initialState, action) => {
    switch ((action as AuthActions).type) {
        case types.LOGIN_REQUEST:
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                user: {
                    email: action.payload.email
                }
            };
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
                user: {
                    email: ''
                },
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


