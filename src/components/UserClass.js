import React from "react";

// to create a class base component in react
class UserClass extends React.Component {

    // for getting props in user class
    constructor(props){
        super(props);
        console.log(props);
    }

    // instead of return we write - render - render method returns jsx in class based component in react
    render(){
        const {name, location} = this.props;
        return(
            <div className="user-card">
                <h2>Name: {name}</h2> 
                <h3>Location: {location}</h3>
                <h4>Contact: @akshaymarch7</h4> 
            </div>
        ); 
    }
    
}

export default UserClass;