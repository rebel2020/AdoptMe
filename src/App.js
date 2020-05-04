import React, { useState } from 'react';
import {render} from 'react-dom';
import Pet from './Pet';
import SearchParams from "./SearchParam";
import {Router, Link} from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

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
			const themeHook=useState("red");
    	return (
			<ThemeContext.Provider value={themeHook}>
    		<div>
				<header>
				<Link to="/">
	    			Adopt me
				</Link>
				</header>
				<Router>
	    			<SearchParams path="/"/>
					<Details path="/details/:id"></Details>
				</Router>
    		</div>
			</ThemeContext.Provider>
    		);
    };

render(<App/>,document.getElementById("root"));