import React from 'react';
import axios from 'axios';
import PetList from './PetList';

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
					page: 2,
					limit: 25,
					location: 'Toronto, ON'
				},
				clientId: 'sUT8NZdMY2j3glWRCUXtWLDv9sBZ4Kpa5zqmtN8WrCcJfneiWJ'
			}
		}).then((res) => {
			const petData = res.data.animals;
			this.setState(() => ({ data: petData }));
		});
	}
	render() {
		console.log('state', this.state.data);
		return (
			<div>
				{this.state.data.length > 1 ? (
					this.state.data
						.filter((data) => data.status !== 'adopted' && data.photos !== [])
						.map((pet, index) => {
							return (
								<div className="petContainer">
									{Object.values(pet.photos).map((photo) => <img src={photo.medium} />)}
									<h3>{pet.name}</h3>
									<ul>
										<li>{pet.species}</li>
										<li key={index + 1}>{pet.age}</li>
										<li key={index + 2}>{pet.breeds.primary}</li>
										<li>{pet.status}</li>
									</ul>
								</div>
							);
						})
				) : null}
			</div>
		);
	}
}

export default PetData;
