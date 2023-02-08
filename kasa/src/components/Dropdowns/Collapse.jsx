import imgUP from "../images/up.png"
import imgDown from "../images/down.png"
import { useState } from "react";
import "../Dropdowns/Collapse.css"


const Collapse = ({ title, content }) => {
    const [ open, setOpen] = useState(false);

    const openClick = () => {
      setOpen((open) => !open );
    };

    return (
        <div className="collapse">
            <button className="collapseButton" onClick={openClick}>
                <p> {title} </p>
                {!open ? <img src={imgUP} alt=""  /> : <img src={imgDown} alt=""  />}
            </button>
            {open && 
                <div className="collapseContent">
                    {Array.isArray(content) ? (
                        <ul className="collapseListe">
                            {content.map((equipement, index) => (
                                <li className="collapseListeElement" key={equipement}>
                                    { equipement }
                                </li>
                            ))}
                        </ul>
                    ) : (
                    <p className="collapseText"> { content } </p>
                    )}
                </div>
            }
    </div>
  );
};

export default Collapse; 