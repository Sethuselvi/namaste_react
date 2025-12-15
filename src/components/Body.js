import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {PROXY_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
const Body = ()=>{
    const [listOfRestaurants,setlistOfRestaurants] =useState([])
    const [filteredRestaurants,setfilteredRestaurants] =useState([])
     const [searchText,setsearchText] =useState("")
     const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
     const onlineStatus = useOnlineStatus();
   
     const {loggedInUser,setUserName} = useContext(UserContext);
    useEffect(()=>{fetchData()},[]);
    const fetchData = async () =>{
       
        const data = await fetch(PROXY_URL);
        const json = await data.json();
      
        //   const swiggyData = json;
       
        const restaurant = json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(info => info);
        setlistOfRestaurants(restaurant)
        setfilteredRestaurants(restaurant)
        
    }
    if(onlineStatus === false){
        return <h1>It looks like you are offline, Please check your internet connection!!</h1>
    }
    if(listOfRestaurants.length === 0) {
        return <Shimmer/>
    }
    return(
    <div className="body">
        <div className="filter flex items-center">
            <div className="m-4 p-4">
                <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange ={(e)=> setsearchText(e.target.value)}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredLists = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredRestaurants(filteredLists);
                    }}>Search</button>
            </div>
            <div >
                 <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={
                ()=>{
                    const filteredLists = listOfRestaurants.filter(res=>res.info.avgRating >= 4.5);
                    setfilteredRestaurants(filteredLists);
                }
                }>Top Rated Restaurants</button>
                <label> UserName: </label>
                {/*  Change the login user name with the input field using  Context*/}
                 <input className="border border-black" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}/>
            </div>
        </div>
        <div className="flex flex-wrap" >
            
            {filteredRestaurants.map((restaurant) => (<Link  data-testid="resCard" key ={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} >{restaurant.info.promoted ?<RestaurantCardPromoted resData = {restaurant} /> :<RestaurantCard resData = {restaurant}/>}</Link>
            
        ))} 
           
        </div>
    </div>
    )
}

export default Body;