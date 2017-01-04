import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';

import AppContainer from './containers/app.container';
import './assets/css/index.css';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
