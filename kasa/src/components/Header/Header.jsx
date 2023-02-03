import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import '../Header/Header.css'

const Header = () => {
    return (
      <div className="Header">
        <img src= {logo} alt="" className='logoHome'/>
        <div className='navBarHeader'>
          <Link className='btnHome' to='/'>Accueil</Link>
          <Link className='btnAbout' to='/about'>A Propos</Link>
        </div>
      </div>
    );
  }
  
  export default Header;
  


  