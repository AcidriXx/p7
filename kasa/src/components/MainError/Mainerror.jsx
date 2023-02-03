import { useNavigate } from "react-router-dom";
import "../MainError/Mainerror.css"


const Mainerror = () => {
    const navigate = useNavigate();

    return (
        <div className="errorMain">
            <h1>404</h1>
            <p className="txtError">Oups! La page que vous demandez n'existe pas.</p>
            <p onClick={() =>{navigate("/");}} className="returnHome">Retourner sur la page d'accueil</p>        
        </div>
    );
}
  
export default Mainerror;