import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import {lazy ,Suspense} from "react";
import { UserContext } from "./utils/UserContext";
import { useState ,useEffect} from "react"
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
const Footer = ()=>{
    return(<div className="footer">
        <center><h6>Copyright 2025</h6></center>
    </div>)
    
}

const AppLayout = ()=>{
    const [userName,setUserName] = useState();
useEffect(()=>{
    //Make an API call and send username
    const data = {
        name:"Sethuselvi"
    }
    setUserName(data.name);
},[])
    return(
         <UserContext.Provider value={{ loggedInUser: userName,setUserName}}>
        <div className="app">
            {/* <UserContext.Provider value={{ loggedInUser: "Arulan"}}> */}
         <Header/>
         {/* </UserContext.Provider> */}
         <Outlet/>
        </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
     path:"/",
     element:<AppLayout/>,
     children:[{
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element:<Suspense fallback={<h1>Loading......</h1>}><About/></Suspense>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
     
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>   
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
    }],
     errorElement:<Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);