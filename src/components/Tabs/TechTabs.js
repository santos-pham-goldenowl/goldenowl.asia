import React, { Component } from 'react';

import TabContent from './TabContent';
import TabHeader from './TabHeader';
import Tabs from './Tabs';

import FrontEndTechs from '../../utils/frontendTechs';
import BackEndTechs from '../../utils/backEndTechs';
import MobileStackTechs from '../../utils/mobileTechs';

import './index.sass';

class TabContainer extends Component {
  render() {
    return (
      <Tabs>
        <TabHeader key="tab1" for="tab1">
          <p className="text-xl">Front - end</p>
        </TabHeader>
        <TabContent name="tab1">
          <section className="tech-tab">
            <div className="row">
              <div className="col-md-5">
                <h2 className="tab-header-title">Front-end</h2>
                <p className="tech-tab__description">
                When talking of front-end development, it’s about transferring the code into the look.  
                Each and every technology we use has different advantages that serve best to different goals. However there is a common between them: They are used and trusted by the biggest and most innovative companies for making high-performance and supremely scalable applications and software.
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
        </TabContent>

        <TabHeader key="tab2" for="tab2">
          <p className="text-xl">Back - end</p>
        </TabHeader>
        <TabContent name="tab2">
          <section className="tech-tab">
            <div className="row">
              <div className="col-md-5">
                <h2 className="tab-header-title">Back-end</h2>
                <p className="tech-tab__description">
                  Back-end developers are responsible for the stability of your product.
                  <br/>
                  We offer the best solutions to ensure your website or mobile app run smoothly even when it is executing multiple actions. And don’t forget the security! We’ve got your back!
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
        </TabContent>

        <TabHeader key="tab3" for="tab3">
          <p className="text-xl">Mobile stack</p>
        </TabHeader>
        <TabContent name="tab3">
          <section className="tech-tab">
            <div className="row">
              <div className="col-md-5">
                <h2 className="tab-header-title">Mobile stack</h2>
                <p className="tech-tab__description">
                  Any software company can build mobile apps with basic components using the same tools. However, the challenge is to actually succeed and create a quality product.
                  <br/> 
                  At Golden Owl, we have developers that can truly take advantage from technologies and put it in awesome work.
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
        </TabContent>

        <TabHeader key="tab4" for="tab4">
          <p className="text-xl">Platform</p>
        </TabHeader>
        <TabContent name="tab4">
          <section className="tech-tab">
            <div className="row">
              <div className="col-md-5">
                <h2 className="tab-header-title">Platform</h2>
                <p className="tech-tab__description">
                  Cross-platform is the solution for businesses who want their product to be released faster with lower budget, considering sacrificing a little bit of UI in their application. Single code, multiple platforms. Quite a result, isn’t it?
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
        </TabContent>
      </Tabs>
    );
  }
}

export default TabContainer;
