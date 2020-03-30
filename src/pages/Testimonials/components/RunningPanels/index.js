import React from 'react'

import { firstRow, secondRow } from '../../../../utils/logoSlider'

import './index.sass'
import Carousel from 'react-multi-carousel'

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
      customTransition="all 1s linear"
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
            max: 464,
            min: 0,
          },
          items: 6,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 6,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={0}
      swipeable
      transitionDuration={1000}
    >
      {firstRow.map((item, index) => (
        <div key={`logo-${index}`} className="m-auto">
          <img className="placeholder-img" src={item} alt={`logo-${index}`} />
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
      customTransition="all 1s linear"
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
            max: 464,
            min: 0,
          },
          items: 6,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 6,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={0}
      swipeable
      transitionDuration={1000}
    >
      {secondRow.map((item, index) => (
        <div key={`logo-${index}`} className="m-auto">
          <img className="placeholder-img rotated" src={item} alt={`logo-${index}`} />
        </div>
      ))}
    </Carousel>

  </section>
)

export default RunningPanels
