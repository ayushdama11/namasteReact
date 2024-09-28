import React from 'react';
import User from './User';
import UserClass from './UserClass';

// class based component
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }
    
    render(){
        // console.log("Parent render")
        return (
            <div>
                <h1>About class component</h1>
                <h2>This is namaste react web series</h2>
                <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"}/>
            </div>
        )
    }
}

// functional Based component
// const About = ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react web series</h2>
//             <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"}/>
//         </div>
//     );
// };

export default About;