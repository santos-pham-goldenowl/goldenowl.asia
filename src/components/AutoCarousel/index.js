import React from "react";
import Carousel from "react-multi-carousel";

import chunkArray from "utils/chunkArray";
import useMobileWidth from "utils/hooks/useMobileWidth";

import "react-multi-carousel/lib/styles.css";
import "./index.sass";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const AutoCarousel = (props) => {
  const isMobile = useMobileWidth();

  const mobileData = props.content.slice(0);

  const defaultItemRender = (data) => {
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay={data.deviceType !== "mobile"}
        keyBoardControl
        customTransition="all .8"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={data.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.content.map((c) => (
          <div key={c.name} className="auto-carousel d-flex flex-column">
            <p>{`"${c.content}"`}</p>
            <div className="feedback__client-wrapper mt-auto">
              <img src={c.url} alt="study" loading="lazy" />
              <p className="auto-carousel__name-company">
                <span>{c.name}</span>, {c.project}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    );
  };

  const mobileItemRender = (data) => {
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay={data.deviceType !== "mobile"}
        keyBoardControl
        customTransition="all .8"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={data.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {chunkArray(mobileData, 3).map((cGroup) => (
          <div key={cGroup.name} className="auto-carousel">
            {cGroup.map((c) => (
              <div className="mobile-micro-item">
                <p>{`"${c.content}"`}</p>
                <div className="feedback__client-wrapper">
                  <img src={c.url} alt="study" loading="lazy" />
                  <p className="auto-carousel__name-company">
                    <span>{c.name}</span>, {c.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    );
  };

  return isMobile ? mobileItemRender(props) : defaultItemRender(props);
};

export default AutoCarousel;
