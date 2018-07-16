import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducer from './src/reducer';

//const sagaMiddleware = createSagaMiddleware();

initialState = {};

/*const store = createStore(
    reducer,
    initialState,
    //applyMiddleware(sagaMiddleware)
);*/

const InstaClone = () => (
    //<Provider store={store}>
        <App />
    //</Provider>
)
AppRegistry.registerComponent('insone', () => InstaClone);

