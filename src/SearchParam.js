import React,{useState,useEffect, useContext} from 'react';
import pet,{ANIMALS} from "@frontendmasters/pet";
import useDropDown from './UseDropDown';
import Results from './Results';
import ThemeContext from "./ThemeContext";

const SearchParams =()=>{
	const [location,setLocation] = useState("Delhi");
	const [breeds,setBreeds] = useState([]);
	const [animal,AnimalDropDown,setAnimal] = useDropDown("animal","dog",ANIMALS);
	const [breed,BreedDropDown,setBreed] = useDropDown("breed","",breeds);
	const [pets,setPets] = useState([]);
	const [theme,setTheme] = useContext(ThemeContext);

//	pet.breeds("cat").then((e)=>{console.log(e);setBreed(e);},console.error);
	
//	const [animal,setAnimal] = useState("Dog");
//	const [breed,setBreed] = useState("");
async function requestPets(){
	const {animals} = await pet.animals({
		location,
		breed,
		type: animal
	});
	setPets(animals||[]);
}

useEffect(()=>{
	setBreeds([]);
	setBreed("");
	pet.breeds(animal).then(({breeds})=>{
		const breedStrings=breeds.map(({name})=>name);
		setBreeds(breedStrings);
	})
},[animal,setBreeds,setBreed]);

return(
		<div className="search-param">
			<form onSubmit={(e)=>{
				e.preventDefault();
				requestPets();
			}}>
				<label htmlFor="location">
					Location
					<input id="loaction" value={location} placeholder = "Location" onChange={e=>setLocation(e.target.value)}/>
				</label> 
				<AnimalDropDown/>
				<BreedDropDown/>
				<select 
				value={theme}
				onChange={e=>setTheme(e.target.value)}
				onBlur={e=>setTheme(e.target.value)}
				>
					<option value="peru">Peru</option>
					<option value="mediumorchid">Medium Orchid</option>
					<option value="chartreuse">Chartreuse</option>
					<option value="red">Red</option>
				</select>
				<button style = {{backgroundColor:theme} } >Submit</button>
			</form>
			<Results pets={pets}/>
		</div>

		);
};
export default SearchParams;