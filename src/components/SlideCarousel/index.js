import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import useMobileWidth from "../../utils/hooks/useMobileWidth";
import chunkArray from "../../utils/chunkArray";

const responsive = {
  desktop: {
    breakpoint: { max: 2560, min: 1366 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1365, min: 768 },
    items: 6,
    slidesToSlide: 6,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const SlideCarousel = ({ ...props }) => {
  const isMobile = useMobileWidth();

  const { content } = props;

  const mobileData = chunkArray(content.slice(0), 6);

  const defaultRender = () => (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={10000}
      centerMode={false}
      className=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      showDots={false}
      sliderClass=""
      swipeable
      ssr
      responsive={responsive}
      containerClass="align-items-center"
    >
      {content.map((c) => (
        <div
          key={c.name}
          className="slide-image-wrapper w-100 d-flex justify-content-center"
        >
          <img
            id={c.name}
            className={`logo-${c.name}`}
            src={c.url}
            alt={c.name}
          />
        </div>
      ))}
    </Carousel>
  )

  const mobileRender = () => (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      className=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      showDots={false}
      sliderClass=""
      swipeable
      ssr
      responsive={responsive}
      containerClass="align-items-center"
    >
      {mobileData.map((cGroup) => (
        <div className="row">
          {cGroup.map((c) =>
            <div className="col-6">
              <img src={c.url} alt={`GO ${c.name}`} id={c.name} />
            </div>
          )}        
        </div>
      )
    )}
    </Carousel>
  )

  return isMobile ? mobileRender() : defaultRender();
};

export default SlideCarousel;
