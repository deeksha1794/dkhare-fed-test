import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './App';
import rootSaga from './sagas';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
if (module.hot) {
	module.hot.accept(App);
}
