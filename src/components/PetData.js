import React from 'react';
import axios from 'axios';

class PetData extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'https://matts-petfinder-app.herokuapp.com/petfinder',
			params: {
				reqUrl: 'https://api.petfinder.com/v2/animals',
				params: {
					page: 1,
					limit: 100,
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
		console.log(this.state.data);

		return (
			<div className="petContainer wrapper">
				{this.state.data.length > 1 ? (
					this.state.data
						.filter((data) => data.status !== 'adopted' && data.photos !== [] && data.photos.length === 1)
						.map((pet, index) => {
							return (
								<div>
									{Object.values(pet.photos).map((photo) => <img src={photo.medium} />)}
									<h3>{pet.name}</h3>
									<ul className="petInfo">
										<li key={index}>{pet.age}</li>
										<li key={index + 1}>{pet.breeds.primary}</li>
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
