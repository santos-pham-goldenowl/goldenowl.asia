import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const SlideCarousel = ({ ...props }) => {
  const { deviceType, content } = props;

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr
      infinite
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="d-flex align-items-center"
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
    >
      {content.map(c => (
        <div className="slide-image-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
          <img className={`logo-${c.name}`} src={c.url} alt={c.name} />
        </div>
      ))}
    </Carousel>
  );
};
export default SlideCarousel;
