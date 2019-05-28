import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import GetPetData from './components/GetPetData';
import MorePetDetails from './components/MorePetDetails';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<GetPetData />
				<Switch>
					<Route path="/details" component={MorePetDetails} />
				</Switch>
			</React.Fragment>
		);
	}
}
