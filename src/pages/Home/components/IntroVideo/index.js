/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './index.sass';
import videoIntro from '../../../../assets/videos/intro.mp4';

const IntroVideo = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <section className="intro">
      <div className="row">
        <div className="col-12 col-md-6 intro__items d-block" data-aos="fade-down">
          <h5>In a world of technology, people make the difference</h5>
          <div className="d-flex">
            <p>
              Caught on camera are the hard-working moments of passionate developers.
              Some of their notable end-products are also shown at the end of the video.
            </p>
          </div>
          <div className="d-flex">
            <p className="bottom-line">
              We strive to ensure your satisfaction, which is always our first priority!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 intro__items d-block" data-aos="fade-up">
          <VisibilitySensor onChange={setIsVisible}>
            <video loop ref={videoRef} controls muted>
              <source src={videoIntro} type="video/mp4" />
            </video>
          </VisibilitySensor>
        </div>
      </div>
    </section>

  );
};

export default IntroVideo;
