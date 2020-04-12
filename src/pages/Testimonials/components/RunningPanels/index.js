import React from 'react';
import Carousel from 'react-multi-carousel';

import { firstRow, secondRow } from '../../../../utils/logoSlider';
import './index.sass';

const RunningPanels = () => (
  <section>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1}
      centerMode={false}
      className=""
      containerClass="logos-row"
      customTransition="all 3s linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 0,
        },
        mobile: {
          breakpoint: {
            max: 767,
            min: 0,
          },
          items: 3,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 768,
          },
          items: 6,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={0}
      swipeable
      transitionDuration={3000}
    >
      {firstRow.map((item, index) => (
        <div key={`logo-${index}`} className="m-auto">
          <img className="running-panels-logo" src={item} alt={`logo-${index}`} />
        </div>
      ))}
    </Carousel>

    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1}
      centerMode={false}
      className=""
      containerClass="logos-row rotated"
      customTransition="all 3s linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 0,
        },
        mobile: {
          breakpoint: {
            max: 767,
            min: 0,
          },
          items: 3,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 768,
          },
          items: 6,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={0}
      swipeable
      transitionDuration={3000}
    >
      {secondRow.map((item, index) => (
        <div key={`logo-${index}`} className="m-auto">
          <img className="running-panels-logo rotated" src={item} alt={`logo-${index}`} />
        </div>
      ))}
    </Carousel>
  </section>
);

export default RunningPanels;
