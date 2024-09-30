import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resData.info;    // optional chaining

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
            <h4>{avgRating} stars</h4>
            <h4>PAY {costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;