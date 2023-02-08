import imgUP from "../images/up.png"
import "../Dropdowns/Collapse.css"

const Collapse = ({ title, content }) => {
  const drop = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;
    console.log(arrow);
    console.log(arrow.classList);

    if (!divText.classList.contains("show")){
        divText.classList.add("show");
        arrow.classList.add("rotate");
    } else {
        divText.classList.remove("show");
        arrow.classList.remove("rotate");
    }
  };

  return (
    <div className="collapse">
        <button className="collapseButton" onClick={drop}>
            <p> {title} </p>
            <img src={imgUP} alt="" />
        </button>
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
    </div>
  );
};

export default Collapse; 