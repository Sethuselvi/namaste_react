import { LOGO_URL} from "../utils/constants";
import { useState,useEffect} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =()=>{
    let btnName ="Login"
    const [btnNameReact,setbtnNameReact] = useState("Login")
    console.log("Header rendered");
    //If no dependency array => useEffect is called on every render\
    // If dependency array is empty []=>useEffect is called on initial render (just once)
    // .If dependency array is btnNameReact=>useEffect is called everytime btnNameReact is updated
    useEffect(()=>{console.log("useEffect called")},[btnNameReact])
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status{onlineStatus ? "✅" :"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                     <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login"onClick={()=>{btnNameReact=="Login" ? setbtnNameReact
                        ("Logout"):setbtnNameReact
                        ("Login")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;