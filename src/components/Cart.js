import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    
    return(
        <div className="text-center m-4 p-4">
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-red-500 text-white rounded-lg cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length ===0 && (<h1>Cart is Empty! Add Items to the cart!</h1>) }
        <ItemList items={cartItems}/>
        </div>
        </div>
    )
}

export default Cart;