//most code from reactjs.org/docs/errorboundaries.html
import React from 'react';
import {Link, Redirect} from "@reach/router";

class ErrorBoundary extends React.Component{
    state ={
        hasError:false,
        redirect:false,
        is:false
    };
    static getDerivedStateFromError(){
        return {hasError:true};
    }
    componentDidCatch(error,info){
        console.log("Error boundary cought an error",error,info);
    }
    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout(()=>this.setState({redirect:true}),5000);
        }
    }
    render(){
        if(this.state.redirect){
            console.log(this.state.redirect);
            return <Redirect to="/"></Redirect>
        }
        if(this.state.hasError)
        {
//            setTimeout(()=>this.setState({redirect:true}),5000);
            return (
                <h1>
                    There was an error with listening this request.
                    <Link to="/">Click here</Link> to go back to home page or wait for 5 seconds.
                </h1>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;