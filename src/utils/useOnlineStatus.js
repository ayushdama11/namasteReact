import { useState, useEffect } from "react";
const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true);

    // check if online
    // event listener to check whethe you are online or offline
    useEffect(() => {
        window.addEventListener("offline", ()=>{
            setonlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setonlineStatus(true);
        });
    }, []);

    // boolean value 

    return onlineStatus;
}

export default useOnlineStatus;