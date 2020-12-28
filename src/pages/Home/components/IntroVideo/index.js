/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './index.sass';
import videoIntro from '../../../../assets/videos/intro.mp4';

const IntroVideo = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else if (videoRef.current.play) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <section className="intro">
      <div className="row">
        <div className="col-12 col-md-6 intro__items d-block" data-aos="fade-down">
          <h5>In a world of technology, people makes the difference</h5>
          <div className="d-flex">
            <p>
              Caught on camera are the coding moments of talented and passionate developers.
              You will also find our best projects demos at the end of the video.
            </p>
          </div>
          <div className="d-flex">
            <p className="bottom-line">
              At Golden Owl, our clients' satisfaction is always our
              first priority!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 intro__items d-block" data-aos="fade-up">
          <VisibilitySensor onChange={(visible) => setIsVisible(visible)}>
            <video loop ref={videoRef} controls>
              <source src={videoIntro} type="video/mp4" />
            </video>
          </VisibilitySensor>
        </div>
      </div>
    </section>

  );
};

export default IntroVideo;