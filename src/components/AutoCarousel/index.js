import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './index.sass';
import leftQuote from '../../assets/images/quote-left-solid.svg';
import rightQuote from '../../assets/images/quote-right-solid.svg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const AutoCarousel = (props) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      keyBoardControl={true}
      customTransition="all .8"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    {props.content.map((c) => {
      return (
        <div className="auto-carousel" style={{paddingRight: "25px", paddingLeft: "25px", textAlign: "left"}}>
          <p>
            <img className="quote-icon" src={leftQuote} />
            {c.content}
            <img className="quote-icon" src={rightQuote} />
          </p>
          <div className="feedback__client-wrapper">
            <img src={c.url} alt="study" />
            <span className="auto-carousel__name">{c.name},&nbsp;</span>
            <span className="auto-carousel__idea">{c.idea}</span>
          </div>
        </div>
      )
    })}
    </Carousel>
  );
}
export default AutoCarousel;
