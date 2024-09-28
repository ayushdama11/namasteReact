// Custom Hooks
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resid)=>{
    const [resInfo, setResInfo] = useState(null);
    // fetchdata
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;