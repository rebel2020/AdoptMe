import React,{useState,useEffect} from 'react';
import pet,{ANIMALS} from "@frontendmasters/pet";
import useDropDown from './UseDropDown';
import Results from './Results';

const SearchParams =()=>{
	const [location,setLocation] = useState("Delhi");
	const [breeds,setBreeds] = useState([]);
	const [animal,AnimalDropDown,setAnimal] = useDropDown("animal","dog",ANIMALS);
	const [breed,BreedDropDown,setBreed] = useDropDown("breed","",breeds);
	const [pets,setPets] = useState([]);
//	pet.breeds("cat").then((e)=>{console.log(e);setBreed(e);},console.error);
	
//	const [animal,setAnimal] = useState("Dog");
//	const [breed,setBreed] = useState("");
async function requestPets(){
	const {animals} = await pet.animals({
		location,
		breed,
		type: animal
	});
	console.log(animals);
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
			<form className="form-group" onSubmit={(e)=>{
				e.preventDefault();
				requestPets();
			}}>
				<label htmlFor="location">
					Location
					<input id="loaction" value={location} placeholder = "Location" onChange={e=>setLocation(e.target.value)}/>
				</label> 
				<AnimalDropDown/>
				<BreedDropDown/>
				<button>Submit</button>
			</form>
			<Results pets={pets}/>
		</div>

		);
};
export default SearchParams;