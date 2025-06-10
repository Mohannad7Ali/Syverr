import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll , duration}) => {
  return (
    <div className="slide">
      <div className="container">
      {/* this is ready componnent form package we pass all the slide component and it make effects */}
        <Slider dots slidesToShow= {slidesToShow} arrowsScroll={arrowsScroll} duration={duration}>  
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
