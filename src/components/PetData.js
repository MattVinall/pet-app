import React from 'react';
import axios from 'axios';

class PetData extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			error: null
		};
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'https://matts-petfinder-app.herokuapp.com/petfinder',
			params: {
				reqUrl: 'https://api.petfinder.com/v2/animals',
				params: {
					page: 1
				},
				clientId: 'sUT8NZdMY2j3glWRCUXtWLDv9sBZ4Kpa5zqmtN8WrCcJfneiWJ'
			}
		}).then((res) => console.log(res.data.animals));
	}
	render() {
		return (
			<div>
				<h1>Pet Data:</h1>
			</div>
		);
	}
}

export default PetData;
