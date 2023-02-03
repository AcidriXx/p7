import imgUP from "../images/up.png"
import "../DropdownsAbout/DropAbout.css"

const CollapseAbout = ({ title, content }) => {
  const drop = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    if (!divText.classList.contains("down")){
        divText.classList.add("down");
        arrow.classList.add("rotate");
    } else {
        divText.classList.remove("down");
        arrow.classList.remove("rotate");
    }
  };

  return (
    <div className="collapseAbout">
        <button className="collapseButtonAbout" onClick={drop}>
            <p> {title} </p>
            <img src={imgUP} alt="" />
        </button>
        <div className="collapseContentAbout">
            <p className="collapseTextAbout"> { content } </p>
        </div>
    </div>
  );
};

export default CollapseAbout; 