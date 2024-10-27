import RestaurantCard, {withRatingsLabel} from "./RestaurantCard"; 
// import resList from "../utils/mockData"; 
import { useEffect, useState, useContext} from "react"; 
import Shimmer from "./Shimmer"; 
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=>{ 
 
    // what makes react app fast is its react fiber - which does the react reconcillation of the componeents and finds the diffrence between updated virtual dom and previous virtual dom and updates the dom only when required.

    // Local state variable - Super powerful variable - for that we use hooks called as useState
    // takes two parameters , name of the list and a function that contains the thing which we need to update
    // whenever a state variable updates, react will renders the component

    // whenever there will be change in any state variable , react will find out diffrence between virtual dom and re render it.

    const [listOfRestaurants, setlistOfRestaurant] = useState([]); 

    // copy of listOfRestaurants for filteredRestaurant
    const [filteredRestaurant, setfilteredRestaurant] = useState([]); 

    // whenever state variable updates, react triggers a reconcilliation cycle i.e it re renders the componenets
    const [searchText, setSearchText]= useState(""); 

    // console.log("Body Rendered" , listOfRestaurants);

    // displaying the higher order component - withRatingsLabel
    const RestaurantCardRated = withRatingsLabel(RestaurantCard);
    
    // useEffect hook - normal react hook
    // gets 2 arguments - callback fuunction and a dependecy  array - where second argument is optional.
    // useEffect's callback will be called after our component renders
    // The useEffect Hook allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM, and timers.

    useEffect(()=>{ 
        fetchData(); 
    }, []); 

    

    // this will be called first as compared to useeffect's callback 
    // console.log("Body component rendered") 

    const fetchData = async () => { 
        const data = await fetch( 
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ); 
        const json = await data.json(); 
        // console.log(json); 
        // Optional Chaining  
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }


    // jab ham wapas se refresh karege to jo blank page aajata hai uske jagah ham loader la rae haii
    // bad practise

    // if(listOfRestaurants.length === 0){
    //     return <h1>LOADING ....</h1>
    // }


    // so we use "shimmer ui" - to load any dummy/fake page until we get data from the api
    // basically shows random grey cards, circles, components, etc...
    // called as Conditonal Rendering - rendering on the basis of conditions 

    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }


    // onChange
    // while creating search div we are assigning value of search to searchText and initally we have given the value of searchText as "" so to update that value on any change at the search bar we use onChange Method 

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you are offline, please check your internet connection !!</h1>

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"
                     className="border border-solid border-black"
                     value={searchText} 
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }} 
                    />
                    <button 
                     className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                     onClick={()=>{
                        // filter the restaurnat cards and update the ui
                        // searchText
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurant(filteredRestaurant);
                     }}
                    >
                    Search</button>
                </div>
                
                <div className="search m-4 p-4 flex items-center rounded-lg">
                    <button 
                    className="px-4 py-2 bg-gray-100"
                    onClick={() => {   // filter out top rated restaurants
                        const filteredList = listOfRestaurants.filter(
                            (res)=>res.info.avgRating>4.5 
                        );
                        setfilteredRestaurant(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                
                <div className="search m-4 p-4 flex items-center rounded-lg">
                    <label>UserName : </label>
                    <input
                     className="border border-black p-2" 
                     value={loggedInUser}
                     onChange={
                        (e) => setUserName(e.target.value)
                     }/>
                </div>
            </div>

            {/* Link is made here because whenever someone clicks on the restaurant's card than the detailis of the card should appear */}
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                     key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}
                    >
                    {/* to display the total ratings which are given to that restaurant - higher order component */}
                     <RestaurantCardRated resData={restaurant} />
                     {/* ( <RestaurantCard resData={restaurant} /> ) */}
                    </Link>
                ))}                
            </div>
                        
        </div>
    )
}

export default Body;