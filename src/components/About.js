// import User from "./User"
import UserClass from "./UserClass";
import React from "react";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

     componentDidMount(){
        console.log("Parent Component Did Mount");
     }
    render(){
         console.log("Parent Render");
        return(
            <div>
                <h1>This is About us page</h1>
                <p>This is Namaste React Web Series</p>
                {/* <User name={"Sethuselvi(function)"}/> */}
                <UserClass name={"Sethuselvi(classes)"} location={"Chennai"}/>
            </div>
        )
    }

}

// const About= () =>{
//     return(
//         <div>
//             <h1>This is About us page</h1>
//             <p>This is Namaste React Web Series</p>
//             {/* <User name={"Sethuselvi(function)"}/> */}
//             <UserClass name={"Sethuselvi(classes)"} location={"Chennai"}/>
//         </div>
//     )
// }

export default About;