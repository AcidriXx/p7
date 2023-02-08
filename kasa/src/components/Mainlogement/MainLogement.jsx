import '../Mainlogement/Mainlogement.css'
import { useParams } from "react-router-dom";
import Rating from '../Rating/Rating';
import Collapse from '../Dropdowns/Collapse'
import Slider from '../Slider/slider';
import Mainerror from "../MainError/Mainerror";
import { useState, useEffect } from "react";


const Mainlogement = () => {
    const { id } = useParams()

    const [products, setProducts] = useState([])
    
        useEffect(() => {
    
            fetch('http://localhost:8080/api/Product')
            .then(res => {
                return res.json()
            })
    
            .then(data => {
                setProducts(data)
            })
        }, [])
    
     for (const element of products) {
        const exists = products.find(element => element.id === id);
        
        if(id && !exists){
            return(
                <Mainerror/>
            )
        }
        else if(id === element.id ) {
     
            return(
                <div className='bodyLogement'>
                    <div className='sliderImg'>
                        <Slider slides={element.pictures}/>
                    </div>
                    <div className='contentLogement'>
                        <div className='titleHost'>
                            <div className='titleLocationTags'>
                                <h1> {element.title} </h1>
                                <p> {element.location} </p>
                                <ul>
                                    {element.tags.map((tag) =>{
                                        return(
                                            <li key={tag}> {tag} </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className='hostRate'>
                                <div className='hostName'>
                                    <p> {element.host.name} </p>
                                    <img src={ element.host.picture } alt="" className='hostPicture'/>
                                </div>
                                <Rating rating={element.rating}/>
                            </div>
                        </div>
                        <div className='dropDown'>
                            <div className='dropDownDescription'><Collapse title="Description"  content={element.description}/></div>
                            <div className='dropDownEquipments'><Collapse title="Équipments"  content={element.equipments}/></div>
                        </div>
                    </div>
                </div>
            )
        } 
      }
      
}

export default Mainlogement;



