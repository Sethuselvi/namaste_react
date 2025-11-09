import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        console.log("Child Constructor");
        this.state ={
           userInfo:{
            name:"Dummy",
            location:"default",
            avatar_url:"http://dummy.com"
           }
        }
    }
   async componentDidMount(){
        // console.log("Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/Sethuselvi");
        const json =  await data.json();
        this.setState({
            userInfo:json
        })
        console.log(json);
     }

     componentDidUpdate(){
        console.log("Component Did Update");
     }
     componentWillUnmount(){
        console.log("Component Will Unmount");
     }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        return(
        <div className="user-card">
            <img src={avatar_url}/>
        <h2>{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:sethuselvi1206</h4>
        </div>
        )
    }
}

export default UserClass;