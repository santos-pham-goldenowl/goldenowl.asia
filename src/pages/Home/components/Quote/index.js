import React from 'react';
import Carousel from 'react-multi-carousel';

import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import work from '../../../../assets/images/work.png';
import mobileWork from '../../../../assets/images/mobileWork.png';

import './index.sass';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Quote = () => {
  const isMobile = useMobileWidth();

  const quotes = [
    {
      quote: '“The best customer service is if the customer doesn’t need to call you, doesn’t need to talk to you. It just works.”',
      name: 'Jeff Bezos',
      job: 'CEO of Amazon',
    },
    {
      quote: '“People who are crazy enough to think they can change the world are the ones who do.”',
      name: 'Steve Jobs',
      job: 'CEO and co-founder of Apple Inc',
    },
    {
      quote: '“If you do build a great EXPERIENCE, customer tell each other about that.”',
      name: 'Jeff Bezos',
      job: 'CEO of Amazon',
    }

  ]

  return (
    <section className="quote">
      <div className="row">
        <div className="col-md-5">
          <Carousel
            ssr
            infinite
            autoPlay
            showDots
            keyBoardControl
            swipeable
            draggable
            responsive={responsive}
            autoPlaySpeed={5000}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
            // deviceType={data.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            {
              quotes.map((item, index) => (
                <div key={`quote-${index + 1}`} className="h-100">
                  <h1 className="quote__content">
                    {item.quote}
                  </h1>
                  <div className="quote__author">
                    <strong className="quote__text-bold">{`${item.name} - `}</strong>
                    {`${item.job}.`}
                  </div>
                </div>
  
              ))
            }
          </Carousel>
        </div>
        <div className="col-md-7">
          <img src={isMobile ? mobileWork : work} alt="work" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Quote;
