import React from 'react';
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel"
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from "./ThemeContext";
import Modal from './Modal';
import { navigate } from '@reach/router';

class Details extends React.Component{
	constructor(props){
        super(props);
        this.state={
			loading:true,
			showModal:false,
        };
	}
	componentDidMount(){
		pet.animal(this.props.id).then(({animal})=>{
			this.setState({
				name:animal.name,
				animal:animal.type,
				location:`${animal.contact.address.city},${animal.contact.address.state}`,
				description:animal.description,
				media:animal.photos,
				breed:animal.breeds.primary,
				key:animal.key,
				url:animal.url,
                loading:false,
			},console.error)
		});
	}
	toggleModal = ()=>this.setState({showModal:!this.state.showModal});
	adopt = ()=>navigate(this.state.url);
	render(){
		if(this.state.loading){
			return (<h1>Loading</h1>);
		}
        const {name,animal,location,description,breed,media}=this.state;
        console.log(media);
		return (
			<div className="details">
            <Carousel media={media}></Carousel>
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${location}`}</h2>
					<ThemeContext.Consumer>
						{([theme])=>(
							<button 
							style={{backgroundColor:theme}}
							onClick={this.toggleModal}
							>Adopt {name}</button>
						)}
					</ThemeContext.Consumer>
					{
						this.state.showModal?(
							<Modal>
							<div>
						<h1>Would you like to adopt {name} ?</h1>
						<ThemeContext.Consumer>
						{([theme])=>(<button onClick={this.adopt} style={{backgroundColor:theme}}>Yes</button>)}
					</ThemeContext.Consumer>
						<ThemeContext.Consumer>
						{([theme])=>(<button onClick={this.toggleModal} style={{backgroundColor:theme}}>No, I am a moster</button>)}
					</ThemeContext.Consumer>
							</div>
							</Modal>
						):null
					}
					<p>{description}</p>
				</div>
			</div>
		);
	}
}
export default function DetailsWithErrorBoundary(props){
    return (<ErrorBoundary>
        <Details {...props}></Details>
    </ErrorBoundary>);
}