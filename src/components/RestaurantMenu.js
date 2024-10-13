import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    // useParams() give us id of the restaurant 
    const {resid} = useParams();
    console.log(resid);

    // ** Custom Hooks
    const resInfo = useRestaurantMenu(resid);

    if(resInfo === null) return <Shimmer/>;
    // if not null than only do destructuring properties otherwise you will get error

    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    
    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

    const categories = 
        resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter
        ((c) =>
             c.card?.card?.["@type"]===
             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl ">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            
            {/* categories accordion */}
        </div>
    );
};

export default RestaurantMenu;