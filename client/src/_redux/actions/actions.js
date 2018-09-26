// import axios from 'axios';
// import config from '../config/config.js';
// const ROOT_URL = config.apiEnd;

//CONSTANTS
export const LOAD_TICKETS = 'LOAD_TICKETS';
export const ADD_TICKET = 'ADD_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const OPEN_TICKET = 'OPEN_TICKET';
export const CLOSE_TICKET = 'CLOSE_TICKET';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_OPEN: 'SHOW_OPEN',
	SHOW_CLOSED: 'SHOW_CLOSED',
	SHOW_NONE: 'SHOW_NONE'
};

//ACTIONS


// I need a function to load all the tickets from the DB to refresh the whole state
// of the app, but first we need to work out the rest of them.

export function addTicket(ticket) {
	return { type: ADD_TICKET, ticket };
}

export function removeTicket(ticket) {
	return { type: REMOVE_TICKET, ticket };
}

export function openTicket(ticket) {
	return { type: OPEN_TICKET, ticket };
}

export function closeTicket(ticket) {
	return { type: CLOSE_TICKET, ticket };
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter };
}

