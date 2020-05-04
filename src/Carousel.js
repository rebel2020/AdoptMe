import React from 'react';

class Carousel extends React.Component{
    state={
        photos:[],
        active:0,
    };    
    static getDerivedStateFromProps({media}){
        let photos=["placecorgl.com/600/600"];
        if(media.length){
            photos=media.map(({large})=>large);
        }
        return {photos};
    }
    handleIndexClick = event=>{
        this.setState({
            active:+event.target.dataset.index
        });
    };
    render(){
//        console.log({photos});
        const {photos,active}=this.state;
        return (<div calssName ="carousel">
            <img src={photos[active]} alt="animal"></img>
            <div className="carousel-smaller">
                {photos.map((photo,index)=>(
                    <img 
                    key={photo}
                    onClick={this.handleIndexClick}
                    data-index={index}
                    className={index===0?"active":""}
                    src={photo}
                    ></img>
                ))}    
            </div>
        </div>)
    }
}
export default Carousel;