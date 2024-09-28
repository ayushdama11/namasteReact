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
        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src ={LOGO_URL}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {onlineStatus ? "✅" : "😒"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {/* Link to is more powerful than anchor tag, it does not re reload the page again and again */}
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
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