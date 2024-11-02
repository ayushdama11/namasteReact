import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{

    // useParams() give us id of the restaurant 
    const {resid} = useParams();
    // console.log(resid);

    const data = "dummy data";

    // ** Custom Hooks
    const resInfo = useRestaurantMenu(resid);

    // by default first one should be open , others to be closed
    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer/>;
    // if not null than only do destructuring properties otherwise you will get error

    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

    const handleSetShowIndex = (index) => {
        // If the same index is clicked, close the accordion; otherwise, open the new one 
        setShowIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const categories = 
        resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter
        ((c) =>
             c.card?.card?.["@type"]===
             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl ">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            {/* categories accordion */} 
            {categories.map((category, index) => ( 
                <RestaurantCategory
                 key={category?.card?.card.title}
                 data={category?.card?.card} 
                 showItems = {index === showIndex ? true : false}
                 setShowIndex = {() => handleSetShowIndex(index)} 
                 dummy = {data} 
                /> 
            ))} 
        </div> 
    );
};

export default RestaurantMenu;