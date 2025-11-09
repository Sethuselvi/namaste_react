
import{CDN_URL} from "../utils/constants"

const RestaurantCard =(props)=>{
const { resData } = props;
const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData.info;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
             <img  className="rounded-lg" alt="restaurant-logo" src={CDN_URL + cloudinaryImageId}/> 
             <h3 className=" font-bold py-4 text-lg">{name}</h3> 
            <h4> {cuisines}</h4>
            <h6>{avgRating} stars</h6>
            <h6>{sla.deliveryTime}mins</h6>
        </div>
    )
}
 export default RestaurantCard;