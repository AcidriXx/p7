import logo from "../images/LOGO.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="Header">
        <img src= {logo} alt="" />
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
      </div>
    );
  }
  
  export default Header;
  