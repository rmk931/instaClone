import { combineReducers } from 'redux';
import { authReducer, AuthReducerState } from './auth/reducer';
//import { postReducer } from './post/reducer';

export interface AppReducerState {
    authReducer: AuthReducerState
}

export default combineReducers({
    authReducer,
//    postReducer    
});