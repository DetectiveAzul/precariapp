import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

//Redux imports
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import precariApp from './reducers/reducers.js';

const store = createStore(
	precariApp,
	window.STATE_FROM_SERVER,
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider>
		<App store={store} />
	</Provider>,
	document.getElementById('root')
);
