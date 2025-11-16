import {CDN_URL} from "../utils/constants";
const ItemList = ({items}) =>{
    return <div> 
        {items.map((item)=>(<div key ={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
         <div className="w-9/12">
         <div className="py-2"> 
            <span>{item.card.info.name}</span>
              <span>₹{item.card.info.price/100}</span>
         </div>
         <p className="text-xs">{item.card.info.description}</p>
          </div>
        <div className="w-3/12 p-4">
        <div className="absolute">
          <button className="px-1 py-0.5 my-8 rounded-sm bg-white font-bold text-green-400 shadow-2xl">Add +</button>
        </div>
         <img src={CDN_URL + item.card.info.imageId}  className="w-full"/>
         </div>
        </div>)) }
         </div>
}
export default ItemList;