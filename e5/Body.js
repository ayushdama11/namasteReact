import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{

    // Local state variable - Super powerful variable - for that we use hooks called as useState
    // takes two parameters , name of the list and a function that contains the thing which we need to update
    // whenever a state variable updates, react will renders the component

    // whenever there will be change in any state variable , react will find out diffrence between virtual dom and re render it.

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);   

    return (
        <div className="body">
            <div className="filter">
                <button
                 className="filter-btn"
                 onClick={() => {   // filter out top rated restaurants
                    setListOfRestaurant()
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.5
                    );
                    setListOfRestaurant(filteredList);
                 }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }                
            </div>
        </div>
    )
}

export default Body;