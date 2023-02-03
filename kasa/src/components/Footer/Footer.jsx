import logo from '../images/logoFooter.png'
import '../Footer/Footer.css'


const Footer = () => {
    return (
      <div className="Footer">
        <div className='FooterContent'>
          <img src= {logo} alt=""  className='imgFooter'/>
          <p className='txtFooter'>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    );
  }
  
  export default Footer;