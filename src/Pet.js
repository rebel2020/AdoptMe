import React from 'react';
export default function Pet({name,animal,breed,key,id,media,location}){
/*	return React.createElement("div",{},
		[React.createElement("h1",{},name),
		React.createElement("h2",{},animal),
		React.createElement("h2",{},breed)
		]
		)
		return (
			<div>
				<h1>{name}</h1>
				<h2>{animal}</h2>
				<h2>{breed}</h2>
			</div>
			)*/
			let hero = "http://placecorgl.com/300/300";
			if(media.length){
				hero=media[0].small;
			}
			return (
				<a href={`/details/${id}`} className = "pet">
					<div className="image-container">
						<img src={hero} alt={name}></img>
					</div>
					<div calssName="info">
						<h2>{name}</h2><br/>
						<h4>{`${animal} - ${breed} - ${location}`} </h4>
					</div>
				</a>
			);
	};
