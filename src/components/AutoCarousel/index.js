import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import partnersLogo from '../../utils/PartnersLogo';

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
    items: 3,
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
            {c.content}
          </p>
          <div className="feedback__client-wrapper">
            <img src={c.url} alt="study" />
            <p>{c.name}</p>
          </div>
        </div>
      )
    })}
    </Carousel>
  );
}
export default AutoCarousel;
