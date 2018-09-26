import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import  precariApp from '../reducers/reducers.js';

const store = createStore(precariApp, window.STATE_FROM_SERVER, applyMiddleware(logger));

import {
	addTicket,
	openTicket,
	closeTicket,
	setVisibilityFilter,
	visibilityFilters,
	ticketStatus
} from '../actions/actions.js';

// Dispatch some actions
store.dispatch(addTicket({_id: 1, text: 'Hello', status: 'OPEN' }));
store.dispatch(addTicket({_id: 2, text: 'Hello2', status: ticketStatus.OPEN }));
store.dispatch(addTicket({_id: 3, text: 'Hello3', status: ticketStatus.OPEN }));
store.dispatch(closeTicket(1));
store.dispatch(closeTicket(2));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_OPEN));
store.dispatch(openTicket(1));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_CLOSED));

