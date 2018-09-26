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

export const ticketStatus = {
	OPEN: 'OPEN',
	CLOSED: 'CLOSED'
};

//ACTIONS


// I need a function to load all the tickets from the DB to refresh the whole state
// of the app, but first we need to work out the rest of them.

export function addTicket(ticket) {
	return { type: ADD_TICKET, ticket: ticket };
}

export function removeTicket(ticket) {
	return { type: REMOVE_TICKET, ticket: ticket };
}

export function openTicket(_id) {
	return { type: OPEN_TICKET, _id: _id };
}

export function closeTicket(_id) {
	return { type: CLOSE_TICKET, _id: _id };
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter: filter };
}

