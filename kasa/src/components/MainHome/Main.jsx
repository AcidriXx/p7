import { Link } from "react-router-dom";
import products from '../../Product.json';
import imgHome from '../images/imgHome.png'
import '../MainHome/Main.css'


const Main = () => {
    return (
       <div className="main">
            <div className="home">
                <img src={imgHome} alt="" className="imgHome"/>
                <p className="txtHome">Chez vous, partout et ailleurs</p>
                <div className="backHome"></div>
            </div>
            <div className="Gallery">
            {
                products.map( product => {
                    return(
                        <div className="card" key={product.id}>
                            <Link to={`/Logement/${product.id}`} className="linkLogement" >
                                <img src={ product.cover } alt="" className="imgLogement" />
                                <p className="txtLogement" >{ product.title }</p>
                                <div className="backlogement"></div>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
       </div> 
    );
}
  
export default Main;


