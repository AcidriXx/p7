import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgHome from '../images/imgHome.png'
import '../MainHome/Main.css'


const Main = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch('http://localhost:8080/api/Product')
        .then(res => {
            return res.json()
        })

        .then(data => {
            setProduct(data)
        })
    }, [])
        console.log(setProduct);

    return (
       <div className="main">
            <div className="home">
                <img src={imgHome} alt="" className="imgHome"/>
                <p className="txtHome">Chez vous, partout et ailleurs</p>
                <div className="backHome"></div>
            </div>
            <div className="Gallery">
            {
                product.map( item => {
                    return(
                        <div className="card" key={item.id}>
                            <Link to={`/Logement/${item.id}`} className="linkLogement" >
                                <img src={ item.cover } alt="" className="imgLogement" />
                                <p className="txtLogement" >{ item.title }</p>
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


