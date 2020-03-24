import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 2560, min: 1366 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1365, min: 768 },
    items: 6,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}
const SlideCarousel = ({ ...props }) => {
  const { deviceType, content } = props

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
      {content.map((c) => (
        <div key={c.name} className="slide-image-wrapper d-flex justify-content-center">
          <img id={c.name} className={`logo-${c.name}`} src={c.url} alt={c.name} />
        </div>
      ))}
    </Carousel>
  )
}
export default SlideCarousel
