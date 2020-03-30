import React from 'react'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import './index.sass'

const responsive = {
  desktop: {
    breakpoint: { max: 2560, min: 1366 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1068, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const AutoCarousel = (props) => (
  <Carousel
    swipeable={false}
    draggable={false}
    showDots
    responsive={responsive}
    ssr
    infinite
    autoPlay={props.deviceType !== 'mobile'}
    keyBoardControl
    customTransition="all .8"
    transitionDuration={1000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
    deviceType={props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {props.content.map((c) => (
      <div key={c.name} className="auto-carousel" style={{ paddingRight: '25px', paddingLeft: '25px', textAlign: 'left' }}>
        <p>
          {`"${c.content}"`}
        </p>
        <div className="feedback__client-wrapper">
          <img src={c.url} alt="study" loading="lazy" />
          <span className="auto-carousel__name">{c.name},&nbsp;</span>
          <span className="auto-carousel__idea">{c.idea}</span>
        </div>
      </div>
    ))}
  </Carousel>
)
export default AutoCarousel
