import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';
import DisplayPetData from './DisplayPetData';

class GetPetData extends Component {
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
					distance: 50
				},
				clientId: 'sUT8NZdMY2j3glWRCUXtWLDv9sBZ4Kpa5zqmtN8WrCcJfneiWJ'
			}
		})
			.then((res) => {
				const petData = res.data.animals;
				const filteredPetData = [ ...petData ].filter(
					(data) => data.status !== 'adopted' && data.photos !== [] && data.photos.length === 1
				);
				console.log(filteredPetData);
				this.setState(() => ({ data: filteredPetData }));
			})
			.catch(() => {
				// const errorMessage = 'No local pets available at this time, please try again later';
				// {
				// 	this.state.data.length === 0 ? this.setState({ error: errorMessage }) : null;
				// }
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
				this.getPetData();
			}
		);
	};

	render() {
		return (
			<div>
				<header />
				<section className="wrapper searchContainer">
					<form onSubmit={this.handleSubmit} action="" className="searchForm">
						<label htmlFor="searchTerm">Enter Your Potal Code:</label>
						<input
							value={this.state.searchTerm}
							onChange={this.handleChange}
							id="searchTerm"
							type="text"
							placeholder="A5K 2C7"
						/>
						<input type="submit" value="search" />
					</form>
				</section>
				<DisplayPetData data={this.state.data} errorHandling={this.state.error} />
			</div>
		);
	}
}

export default GetPetData;
