import {PROXY_MENU_URL} from "../utils/constants";
import {useState,useEffect} from "react"
const useRestaurantMenu = (resId) => {
   const [resInfo,setresInfo] = useState(null);
   
    useEffect(()=>{
         fetchMenu();
    },[resId])
    const fetchMenu = async () =>{
        const data = await fetch(PROXY_MENU_URL + `/${resId}`);
                const json = await data.json();
              
                 const swiggyData = JSON.parse(json.contents);
               
                const restaurant_menu = swiggyData.data
                 
                   
    
    setresInfo(restaurant_menu )
    }
   
    return resInfo
}

export default useRestaurantMenu;