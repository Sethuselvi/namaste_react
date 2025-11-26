 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router"
 import Shimmer from "./Shimmer";
 import RestaurantCategory from "./RestaurantCategories";
 import {useState} from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setshowIndex] = useState(0)
    // useEffect(()=>{fetchMenu()},[]);
    const categories = resInfo?.cards[4]?.groupedCard.cardGroupMap. REGULAR?.cards.filter((category)=>category?.card?.card['@type'] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
   
    return resInfo ===null ? (<Shimmer/>) :(<div className ="text-center">
            <h1 className ="font-bold my-6 text-2xl">{resInfo.cards[2].card.card.info.name}</h1>
               <h2  className ="font-bold text-lg">{resInfo.cards[2].card.card.info.cuisines.join(" , ")} - {resInfo.cards[2].card.card.info.costForTwo}</h2>
               {/**category accordions **/}
              {categories.map((category,index)=> <RestaurantCategory key ={category.card.card.title} data={category.card.card} showItems ={index == showIndex? true: false} setshowIndex={()=>setshowIndex(index)} />)}
        </div>)
}
export default RestaurantMenu;