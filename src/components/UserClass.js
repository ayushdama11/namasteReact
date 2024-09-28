import React from "react";

// done earlier :- now states and functional component is used 

// to create a class base component in react
class UserClass extends React.Component {

    // for getting props in user class
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    // use to call api's - like useEffect but in class Component
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ayushdama11");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    // called at the very last after didMount
    componentDidUpdate() {
        console.log("component did update");
    }

    // done after updation see the lifecycle path below at last
    componentWillUnmount(){
        console.log("Component will Unmount");
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2> 
                <h3>Location: {location}</h3>
                <h4>Contact: @akshaymarch7</h4> 
            </div>
        ); 
    }
}

export default UserClass;


/****
 * 
 * --- MOUNTING ----
 * 
 * Constructor(dummy)
 * Render(dummy)
 *      <html dummy>
 * Component Did Mount
 *      <api call>
 *      <this.setState>     -> State variable is updated with api data
 * 
 * 
 * --- UPDATE
 * 
 * render(API data) 
 * <html> with new api data
 * component did update
 * 
 * 
 * --- UNMOUNTING
 * component will unmount
 * 
 */