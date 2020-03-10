import React, { Component } from 'react'

import TabContent from './TabContent'
import TabHeader from './TabHeader'
import Tabs from './Tabs'

import './index.sass'
import FrontEndTechs from '../../utils/FrontendTechs'
import BackEndTechs from '../../utils/BackEndTechs'
import MobileStackTechs from '../../utils/MobileTechs'

class TabContainer extends Component {
  render() {
    return (
      <Tabs>
        <TabHeader for="tab1">
          <p className="text-xl">Front - end</p>
        </TabHeader>
        <TabContent name="tab1">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Front-end</h2>
              <p className="tech-tab__description text-lg">
                By using modern developing website technology, we produce the most high-quality product with high speed and stability of the software.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {FrontEndTechs.map((tech) => (
                <div className="tech-tab__logo-wrapper">
                  <img src={tech.url} alt={tech.name} />
                  <p className="tech-tab__logo-name">{tech.name}</p>
                </div>
              ))}
            </div>
          </section>
        </TabContent>

        <TabHeader for="tab2">
          <p className="text-xl">Back - end</p>
        </TabHeader>
        <TabContent name="tab2">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Back-end</h2>
              <p className="tech-tab__description text-lg">
                Providing and implementing system solutions with the latest technology. We ensure the stability and security.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {BackEndTechs.map((tech) => (
                <div className="tech-tab__logo-wrapper">
                  <img src={tech.url} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>
        </TabContent>

        <TabHeader for="tab3">
          <p className="text-xl">Mobile stack</p>
        </TabHeader>
        <TabContent name="tab3">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Mobile stack</h2>
              <p className="tech-tab__description text-lg">
                With modern technologies and a team of excel developers, we offer mobile applications solutions across multiple platforms (Androids, ios, etc).
              </p>
            </div>
            <div className="tech-tab__right-side">
              {MobileStackTechs.map((tech) => (
                <div className="tech-tab__logo-wrapper">
                  <img src={tech.url} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>
        </TabContent>

        <TabHeader for="tab4">
          <p className="text-xl">Platform</p>
        </TabHeader>
        <TabContent name="tab4">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Platform</h2>
              <p className="tech-tab__description text-lg">
                Having many experienced developers allows us to provide specialized software running on one and even many different platforms with just a single source code.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {MobileStackTechs.map((tech) => (
                <div className="tech-tab__logo-wrapper">
                  <img src={tech.url} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>
        </TabContent>
      </Tabs>
    )
  }
}

export default TabContainer
