import { logo_url } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    
    const onlineStatus = useOnlineStatus()
    return (
      <div className="head">
        <div className="logo">
          <img src={logo_url} />
        </div>
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link ></li>
            <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
            <li><Link to="/grocery">Grocery Store</Link ></li>
            <li><Link to="/about">About Us</Link ></li>
            <li><Link to="/">Cart</Link ></li>
            <button onClick={()=>{
                btnName==="Login" ? (setbtnName("Logout")) : (setbtnName("Login")) 
            }}>{btnName}</button>
          </ul>

        </div>
      </div>
    );
  };

export default Header;