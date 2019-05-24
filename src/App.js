import React from 'react';
import PetData from './components/PetData';
import SearchPets from './components/SearchPets';
import './App.scss';
const App = () => {
	return (
		<div className="App">
			<SearchPets />
			{/* <PetData /> */}
		</div>
	);
};

export default App;
