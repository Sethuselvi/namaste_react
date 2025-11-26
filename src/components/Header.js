import { LOGO_URL} from "../utils/constants";
import { useState,useEffect,useContext} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =()=>{
    let btnName ="Login"
    const [btnNameReact,setbtnNameReact] = useState("Login")
    const {loggedInUser}  = useContext(UserContext);
    console.log(loggedInUser);
  
    //If no dependency array => useEffect is called on every render\
    // If dependency array is empty []=>useEffect is called on initial render (just once)
    // .If dependency array is btnNameReact=>useEffect is called everytime btnNameReact is updated
    useEffect(()=>{console.log("useEffect called")},[btnNameReact])
    const onlineStatus = useOnlineStatus();
    const cartItems= useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-100">
            <div className="w-56">
                
                <img className="logo" src={ LOGO_URL}></img>
                </div>
            
            <div className="flex items-center">
               
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status{onlineStatus ? "✅" :"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                     <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li  className="px-4 font-bold"><Link to="/cart">Cart : {cartItems.length} Items</Link></li>
                    <button className="login"onClick={()=>{btnNameReact=="Login" ? setbtnNameReact
                        ("Logout"):setbtnNameReact
                        ("Login")}}>{btnNameReact}</button>
                     <li className="px-4 font-bold">{loggedInUser}</li>   
                </ul>
            </div>
        </div>
    )
}

export default Header;