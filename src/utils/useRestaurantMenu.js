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
                console.log(json);
                 const swiggyData = JSON.parse(json.contents);
                 console.log(swiggyData.data,'swiggydata');
                 console.log(swiggyData.data.cards[2].card.card.info,'swiggydata');
                const restaurant_menu = swiggyData.data
                  console.log(restaurant_menu,'json');
                   
    
    setresInfo(restaurant_menu )
    }
    console.log(resInfo);
    return resInfo
}

export default useRestaurantMenu;