import {
	ticketStatus,
	ADD_TICKET,
	// REMOVE_TICKET,
	OPEN_TICKET,
	CLOSE_TICKET,
} from '../actions/actions.js';


function tickets(state = [], action) {
	switch (action.type) {
	case ADD_TICKET:
		return Object.assign({}, state, {
			tickets: [...state.tickets, action.ticket]
		});
	case OPEN_TICKET:
		return Object.assign({}, state, {
			todos: state.tickets.map(ticket => {
				if (ticket._id === action._id) {
					return Object.assign({}, ticket, {
						status: ticketStatus.OPEN
					});
				}
				return ticket;
			})
		});
	case CLOSE_TICKET:
		return Object.assign({}, state, {
			todos: state.tickets.map(ticket => {
				if (ticket._id === action._id) {
					return Object.assign({}, ticket, {
						status: ticketStatus.CLOSED
					});
				}
				return ticket;
			})
		});
	default:
		return state;
	}
}

export default tickets;