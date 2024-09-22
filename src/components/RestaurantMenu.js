import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = ()=>{

    const [resInfo,setresInfo] = useState(null);

    // useParams() give us id of the restaurant 
    const {resid} = useParams();
    console.log(resid);

    useEffect(()=>{
        fetchMenu();
    }, []);
    
    const fetchMenu = async()=>{
        const data = await fetch(MENU_API+resid);
        const json = await data.json();
        console.log(json);

        setresInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>;

    // if not null than only do destructuring properties otherwise you will get error

    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=> <li key={item.card.info.id}> {item.card.info.name} - {"Rs. "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;