import { Component } from 'react';

export default class MorePetDetails extends Component {
	constructor(props) {
		super(props);
	}

	getPetData = (props) => {
		axios({
			method: 'GET',
			url: 'https://matts-petfinder-app.herokuapp.com/petfinder',
			params: {
				reqUrl: `https://api.petfinder.com/v2/animals/${props.data.id}`,
				clientId: 'sUT8NZdMY2j3glWRCUXtWLDv9sBZ4Kpa5zqmtN8WrCcJfneiWJ'
			}
		}).then((res) => {
			console.log(res);
		});
	};

	render() {
		return <h1>hello from more details page</h1>;
	}
}
