import React from 'react';
import './App.css';
import PetData from './components/PetData';
import SearchPets from './components/SearchPets';

const App = () => {
	return (
		<div className="App">
			<SearchPets />
			{/* <PetData /> */}
		</div>
	);
};

export default App;
