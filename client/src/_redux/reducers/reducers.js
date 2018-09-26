import { combineReducers } from 'redux';
import visibilityFilter from './visibility_reducer';
import tickets from './tickets_reducer';

const precariApp = combineReducers({
	visibilityFilter,
	tickets
});

export default precariApp;
