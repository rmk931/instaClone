import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './src/App';
import reducer from './src/reducer';
import rootSaga from './src/saga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};


const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const InstaClone = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent('insone', () => InstaClone);

