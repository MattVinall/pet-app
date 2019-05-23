import React, { Component } from 'react';
import axios from 'axios';
// import { get } from 'https';

class SearchPets extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: '',
			searchParam: '',
			data: [],
			error: null
		};
	}

	componentDidMount() {
		this.getPetData();
	}

	getPetData = () => {
		axios({
			method: 'GET',
			url: 'https://matts-petfinder-app.herokuapp.com/petfinder',
			params: {
				reqUrl: 'https://api.petfinder.com/v2/animals',
				params: {
					page: 1,
					limit: 100,
					location: `${this.state.searchParam}`,
					distance: 25
				},
				clientId: 'sUT8NZdMY2j3glWRCUXtWLDv9sBZ4Kpa5zqmtN8WrCcJfneiWJ'
			}
		})
			.then((res) => {
				const petData = res.data.animals;
				const filteredPetData = [ ...petData ].filter(
					(data) => data.status !== 'adopted' && data.photos !== [] && data.photos.length === 1
				);
				this.setState(() => ({ data: filteredPetData }));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// clears the search term and THEN use a callback function to get the petData from the API
		this.setState(
			{
				searchParam: this.state.searchTerm,
				searchTerm: '',
				data: []
			},
			() => {
				this.getPetData(e);
			}
		);
	};

	render() {
		return (
			<div>
				<header />
				<section className="searchBar">
					<div className="wrapper searchContainer">
						<form onSubmit={this.handleSubmit} action="" className="searchForm">
							<label htmlFor="searchTerm">Enter Your Potal Code (ex: A2R 5L4):</label>
							<input
								value={this.state.searchTerm}
								onChange={this.handleChange}
								id="searchTerm"
								type="text"
							/>
							<input type="submit" value="search" />
						</form>
					</div>
				</section>
			</div>
		);
	}
}

export default SearchPets;
