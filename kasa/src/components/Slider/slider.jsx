import React, { useState } from "react"
import "../Slider/slider.css"


import left from "../images/left.png"
import right from "../images/right.png"

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1 );
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1 );
    };

    return (
        <div className="slider">
            {slides.map((picture, index) => {
                return (
                    <div className={index === current ? "slidePictureON" : "slidePictureOff"} key={index}>
                        {index === current && (
                            <img src={picture} alt=""  className="pictureSlider" key={picture}/>
                        )}
                    </div>
                );
            })}
            {length > 1 ? (
                <>
                <div className="sliderPrev" onClick={prevSlide}>
                    <img src={left} alt="" className="iconPrev"/>
                </div>
                <div className="sliderNext" onClick={nextSlide}>
                    <img src={right} alt="" className="iconNext"/>
                </div>
                <div className="compteurSlide">
                    <p>{current + 1}/{length}</p>
                </div>
                </>
            ) : null }
        </div>
    );
};

export default Slider;