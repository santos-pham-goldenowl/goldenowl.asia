import React, { useEffect } from 'react';

import FrontEndTechs from '../../utils/frontendTechs';
import BackEndTechs from '../../utils/backEndTechs';
import MobileStackTechs from '../../utils/mobileTechs';

import './index.sass';
import './slideTab.sass';

const TestTab = () => {
  useEffect(() => {
    const slide = document.getElementById('slide');
    const tabs = document.querySelectorAll('.tab');
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');

    function moveToFirst() {
      slide.classList = 'move-to-first';
      tabs.forEach((tile) => {
        tile.classList.remove('selected');
      });
      tab1.classList.add('tab', 'selected');
    }

    function moveToSecond() {
      slide.classList = 'move-to-second';
      tabs.forEach((tile) => {
        tile.classList.remove('selected');
      });
      tab2.classList.add('tab', 'selected');
    }

    function moveToThird() {
      slide.classList = 'move-to-third';
      tabs.forEach((tile) => {
        tile.classList.remove('selected');
      });
      tab3.classList.add('tab', 'selected');
    }

    tab1.addEventListener('click', moveToFirst);
    tab2.addEventListener('click', moveToSecond);
    tab3.addEventListener('click', moveToThird);
  }, []);

  return (
    <div id="wrap">
      <div className="header-group">
        <div id="tab1" className="tab selected">
          Front - end
        </div>
        <div id="tab2" className="tab">
          Back-end
        </div>
        <div id="tab3" className="tab">
          Mobile stack
        </div>
      </div>

      <div id="container">
        <div id="slide" className="move-to-first">
          <div id="first" className="box tab-content-container">
            <section className="tech-tab">
              <div className="row">
                <div className="col-md-5">
                  <h2 className="tab-header-title">Front-end</h2>
                  <p className="tech-tab__description">
                    When talking of front-end development, it’s about
                    transferring the code into the look. Each and every
                    technology we use has different advantages that serve best
                    to different goals. However there is a common between them:
                    They are used and trusted by the biggest and most innovative
                    companies for making high-performance and supremely scalable
                    applications and software.
                  </p>
                </div>
                <div className="col-md-6 ml-auto right-side">
                  {FrontEndTechs.map((tech) => (
                    <div key={tech.name} className="tech-tab__logo-wrapper">
                      <div className="image-wrapper">
                        <img src={tech.url} alt={tech.name} />
                      </div>
                      <p className="tech-tab__logo-name">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div id="second" className="box">
            <section className="tech-tab">
              <div className="row">
                <div className="col-md-5">
                  <h2 className="tab-header-title">Back-end</h2>
                  <p className="tech-tab__description">
                    Back-end developers are responsible for the stability of
                    your product.
                    <br />
                    We offer the best solutions to ensure your website or mobile
                    app run smoothly even when it is executing multiple actions.
                    And don’t forget the security! We’ve got your back!
                  </p>
                </div>
                <div className="col-md-6 ml-auto right-side">
                  {BackEndTechs.map((tech) => (
                    <div key={tech.name} className="tech-tab__logo-wrapper">
                      <div className="image-wrapper">
                        <img src={tech.url} alt={tech.name} />
                      </div>
                      <p className="tech-tab__logo-name">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div id="third" className="box tab-content-container">
            <section className="tech-tab">
              <div className="row">
                <div className="col-md-5">
                  <h2 className="tab-header-title">Mobile stack</h2>
                  <p className="tech-tab__description">
                    Any software company can build mobile apps with basic
                    components using the same tools. However, the challenge is
                    to actually succeed and create a quality product.
                    <br />
                    At Golden Owl, we have developers that can truly take
                    advantage from technologies and put it in awesome work.
                  </p>
                </div>
                <div className="col-md-6 ml-auto right-side">
                  {MobileStackTechs.map((tech) => (
                    <div key={tech.name} className="tech-tab__logo-wrapper">
                      <div className="image-wrapper">
                        <img src={tech.url} alt={tech.name} />
                      </div>
                      <p className="tech-tab__logo-name">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTab;
