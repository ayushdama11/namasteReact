// we use import keyword for importing react into our project from node_modules
import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Lazy Loading
// Dynamic Bundling
// On-demand loading
// ----- we will use grocery componenet using new bundler - i.e using chunking 
const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=>{

    const [userName, setUserName] = useState();

    // authentication
    useEffect(()=>{
        // make an api call and send username and pswd
        const data = {
            name: "Ayush Dama",
        };
        setUserName(data.name);
    }, []);

    return (
        <div className="app">
            {/* <UserContext.Provider value={{loggedInUser: userName}}> */} 
            <UserContext.Provider value={{loggedInUser: userName , setUserName}}> 
                <Header /> 
                {/* according to routes - the childrens will come at the place of Outlet component */}
                <Outlet /> 
            </UserContext.Provider> 
        </div>  
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                // Suspense ham tab use karte hai jab ham lazy loading use kar rae hote hai , fallback matlab jb tak wo page load ho ra hai tab tak ye suspense loading dikhaega 
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
            // dynamic path - ":" - as here restaurant id will change for each restaurant.
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


