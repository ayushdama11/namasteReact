import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {

    // i dont want power of showItems in Restaurant category - so i will shift it to RestaurantMenu
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems);

        // this function will basically show and hid3 the respective restaurant category itemlists
        // if showItems is true make it false, if false, make it true
        setShowIndex();
    }

    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {/* Accordion Body */}
                {/* if show items is true than only show my items */}
                {showItems && <ItemList items={data.itemCards} dummy = {dummy} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;