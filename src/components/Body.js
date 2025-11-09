import RestaurantCard from "./RestaurantCard";
import { useState,useEffect, use } from "react";
import Shimmer from "./Shimmer";
import {PROXY_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=>{
    const [listOfRestaurants,setlistOfRestaurants] =useState([])
    const [filteredRestaurants,setfilteredRestaurants] =useState([])
     const [searchText,setsearchText] =useState("")
     const onlineStatus = useOnlineStatus();
    useEffect(()=>{fetchData()},[]);
    const fetchData = async () =>{
        // const swiggyUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.059791&lng=80.1989893&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null';
        // const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(swiggyUrl)}`;
        const data = await fetch(PROXY_URL);
        const json = await data.json();
        const swiggyData = JSON.parse(json.contents);
       
        // console.log(swiggyData.data.cards);
        // console.log(swiggyData.data.cards[5].card.card.info);
        //const restaurants = [swiggyData.data.cards[3].card.card.info,swiggyData.data.cards[4].card.card.info,swiggyData.data.cards[5].card.card.info,swiggyData.data.cards[6].card.card.info,swiggyData.data.cards[7].card.card.info,swiggyData.data.cards[8].card.card.info,swiggyData.data.cards[9].card.card.info];
        // const restaurant = swiggyData.data.cards.slice(3) .map(card => card.card.card.info);
        const restaurant = swiggyData.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(info => info);
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
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange ={(e)=> setsearchText(e.target.value)}/>
                <button onClick={()=>{
                    console.log(searchText)
                    const filteredLists = listOfRestaurants.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredRestaurants(filteredLists);
                    }}>Search</button>
            </div>
            <button className="filter-btn" onClick={
                ()=>{
                    const filteredLists = listOfRestaurants.filter(res=>res.avgRating>4);
                    setlistOfRestaurants(filteredLists);
                }
                }>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
            
            {filteredRestaurants.map((restaurant) => (<Link  key ={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} ><RestaurantCard resData = {restaurant}/></Link>
            
        ))} 
            {/* <RestaurantCard resData={resList[0]}/>
            <RestaurantCard resData={resList[1]}/>
            <RestaurantCard resData={resList[2]}/>
            <RestaurantCard resData={resList[3]}/>
            <RestaurantCard resData={resList[4]}/>
            <RestaurantCard resData={resList[5]}/>
            <RestaurantCard resData={resList[6]}/>
            <RestaurantCard resData={resList[7]}/>
            <RestaurantCard resData={resList[8]}/>
            <RestaurantCard resData={resList[9]}/>
            <RestaurantCard resData={resList[10]}/> */}
        </div>
    </div>
    )
}

export default Body;