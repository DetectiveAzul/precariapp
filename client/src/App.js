import React, { Component } from 'react';
import { Router } from '@reach/router';

//Importing containers
import  TicketsView from './_containers/TicketsView.js';
import { NoFound } from './Other.js';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Router>
					<TicketsView path="/tickets" />
					<NoFound default />
				</Router>
			</div>
		);
	}
}

export default App;
