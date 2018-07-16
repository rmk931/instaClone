import { Reducer } from 'redux';

import * as actions from './actions';
import * as types from './actionTypes';

interface State {
    isAuth: boolean;
    user: object;
    error: string;
};

export const initialState: State = {
    isAuth: false,
    user: {},
    error: ''
};

const reducer: Reducer<State> = (state: State = initialState, action) => {
    switch ((action as types.AuthActions).type) {
        case '@@auth/LOGIN_SUCCESS': 
        case '@@auth/SIGNUP_SUCCESS':
            return {
                ...state,
            };
        case '@@auth/LOGIN_ERROR':
        case '@@auth/SIGNUP_ERROR':
            return {
                ...state,
            }
    }
}

