import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items, dummy}) => {
    console.log({dummy});

    // handleClick function - whenever someone clicks onthe Add button, it should add that following item to the cart
    // ** dispatching an action - useDispatch() - hook for dispatching an ction
    const dispatch = useDispatch();

    // adding item to the cart
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
                {items.map((item) => (
                    <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                            <button
                            className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                            // onClick = {handleAddItem}>       // This will add "pizza" (as hardcoded in handleAddItem) to the cart every time the button is clicked, regardless of which item the button belongs to.
                            // This approach allows you to pass specific item details to handleAddItem ⬇️
                            // {/* // handleAddItem(item) will execute immediately, rather than waiting for a click.    */}
                            // {/* onClick = {handleAddItem(item)}> */}
                            onClick = {() => handleAddItem(item)}>   
                                Add +
                            </button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ItemList;