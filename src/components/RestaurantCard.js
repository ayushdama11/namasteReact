import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resData.info; 

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={
                  CDN_URL
                  +cloudinaryImageId
                }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>PAY {costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    );
};


// Higher order component - display total ratings given to the restaurant
// input - restaurant card =>> restaurant card with ratings

export const withRatingsLabel = (RestaurantCard) => {
    // returns a function or component - higher order component
    return (props) => {
        const {resData} = props;
        const {totalRatingsString} = resData.info;        
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> {totalRatingsString} </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
}



export default RestaurantCard;