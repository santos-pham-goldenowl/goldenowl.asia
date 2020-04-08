import React, { Component } from 'react'

import TabContent from './TabContent'
import TabHeader from './TabHeader'
import Tabs from './Tabs'

import './index.sass'
import FrontEndTechs from 'utils/frontendTechs'
import BackEndTechs from 'utils/backEndTechs'
import MobileStackTechs from 'utils/mobileTechs'

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
                  By using modern developing website technology, we produce the
                  most high-quality product with high speed and stability of the
                  software.
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
                  Providing and implementing system solutions with the latest
                  technology. We ensure the stability and security.
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
                  With modern technologies and a team of excel developers, we
                  offer mobile applications solutions across multiple platforms
                  (Androids, ios, etc).
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
                  Having many experienced developers allows us to provide
                  specialized software running on one and even many different
                  platforms with just a single source code.
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
    )
  }
}

export default TabContainer
