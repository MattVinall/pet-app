import React from 'react';

const DisplayPetData = (props) => (
	<div className="petContainer wrapper">
		{/* check if the length of the state data array is greater than one - only if so return render data */}

		{props.data.length > 1 ? (
			// make copy of state by spreading
			[ ...props.data ]
				//filter over array of object and only return data that meeets set conditions
				.filter((data) => data.status !== 'adopted' && data.photos !== [] && data.photos.length === 1)
				.map((pet, index) => {
					return (
						<div>
							{Object.values(pet.photos).map((photo) => <img src={photo.medium} />)}
							<h3>{pet.name}</h3>
							<ul className="petInfo">
								<li key={index}>{pet.age}</li>
								<li key={index + 1}>{pet.breeds.primary}</li>
								<li />
							</ul>
						</div>
					);
				})
		) : null}
	</div>
);

export default DisplayPetData;
