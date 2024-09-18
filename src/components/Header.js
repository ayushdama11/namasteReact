import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = ()=>{

    const [btnNameReact, setbtnNameReact] = useState("Login");

    useEffect(()=>{
        console.log("useEffect called")
    },[]);


    return (
        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src ={LOGO_URL}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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