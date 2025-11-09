 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router"
import resListMenu from "../utils/menu_mockdata";
 import Shimmer from "./Shimmer";
 
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    // useEffect(()=>{fetchMenu()},[]);
   
    return resInfo ===null ? (<Shimmer/>) :(<div>
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
               <h2>{resInfo.cards[2].card.card.info.cuisines} - {resInfo.cards[2].card.card.info.costForTwo}</h2>
            <h2>Menu</h2>
            <ul>
                {resInfo.cards[4].groupedCard.cardGroupMap. REGULAR.cards[1].card.card.itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - {'Rs '+item.card.info.price/100}</li>
                ))}
                
            </ul>
        </div>)
}
export default RestaurantMenu;