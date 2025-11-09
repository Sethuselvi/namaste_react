
import{CDN_URL} from "../utils/constants"

const RestaurantCard =(props)=>{
const { resData } = props;
const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData.info;

    return(
        <div className="restaurant-card"  style={{backgroundColor:"#f0f0f0"}} >
             <img  className="restaurant-logo" alt="restaurant-logo" src={CDN_URL + cloudinaryImageId}/> 
             <h3>{name}</h3> 
            <h4> {cuisines}</h4>
            <h6>{avgRating} stars</h6>
            <h6>{sla.deliveryTime}mins</h6>
        </div>
    )
}
 export default RestaurantCard;