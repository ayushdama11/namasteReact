import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    // dependecy array is not mandatory only callback is mandatory
    // if no dependency array => useEffect is clled on every comopnent render
    // if there is [] empty dependecy array => useEffect is called on inital render(just once)
    // if there is something inside depenecy array then it is called only when that dpenedcy changes 

    return (
        <div className = "flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className = "logo-container">
                <img className="w-56" src ={LOGO_URL}  />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online status: {onlineStatus ? "✅" : "😒"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    {/* Link to is more powerful than anchor tag, it does not re reload the page again and again */}
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                         btnNameReact === "Login"
                          ? setbtnNameReact("Logout")
                          : setbtnNameReact("Login");
                         console.log(btnNameReact);
                        }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;