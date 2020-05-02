import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet';
import SearchParams from "./SearchParam";
/*const Pet = ({name,animal,breed})=>{
	return React.createElement("div",{},
		[React.createElement("h1",{},name),
		React.createElement("h2",{},animal),
		React.createElement("h2",{},breed)
		]
		)
	};
*/
const App = ()=>{
/*    	return React.createElement(
    		"div",
    		{},
    		[React.createElement("h1",{},"Adopt me"),
    		React.createElement(Pet,{name:"Luna",animal:"Dog",breed:"Havanese"}),
    		React.createElement(Pet,{name:"Pepper",animal:"Bird",breed:"Cockatiel"}),
    		React.createElement(Pet,{name:"Doink",animal:"Cat",breed:"Mixed"})
    		]
    		);*/
    	return (
    		<div>
    			<h1>"Adopt me"</h1>
    			<SearchParams/>

    		</div>

    		);
    };

render(<App/>,document.getElementById("root"));