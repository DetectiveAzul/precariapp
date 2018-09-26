import {
	visibilityFilters,
	SET_VISIBILITY_FILTER
} from '../actions/actions.js';

function visibilityFilter(state = visibilityFilters.SHOW_ALL, action) {
	switch (action.type) {
	case SET_VISIBILITY_FILTER:
		return action.filter;
	default:
		return state;
	}
}

export default visibilityFilter;
