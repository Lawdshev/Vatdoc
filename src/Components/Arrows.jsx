import React from "react";
import Carousel from "react-multi-carousel";

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return  <i className="fa-solid fa-arrow-right-long ml-[20px] text-[#1FBE54] cursor-pointer"  onClick={() => onClick()} ></i>;
  };
  export default CustomRightArrow;