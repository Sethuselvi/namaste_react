// import User from "./User"
import UserClass from "./UserClass";
import React from "react";
import {Component} from "react";
import { UserContext } from "../utils/UserContext";

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
                <div className="text-xl font-bold">
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
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