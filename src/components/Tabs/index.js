import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabContent from './TabContent';
import TabHeader from './TabHeader';
import Tabs from './Tabs';
import './index.sass';
import FrontEndTechs from '../../utils/FrontendTechs';

class TabContainer extends Component {
  render() {
    return(
      <Tabs>
        <TabHeader for="tab1">
          <p>Front - end</p>
        </TabHeader>
        <TabContent name="tab1">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Front end content</h2>
              <p>
                Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {FrontEndTechs.map((tech) => {
                return (
                  <div className="tech-tab__logo-wrapper">
                    <img src={tech.url} alt={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </TabContent>

        <TabHeader for="tab2">
          <p>Back - end</p>
        </TabHeader>
        <TabContent name="tab2">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Back end content</h2>
              <p>
                Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {FrontEndTechs.map((tech) => {
                return (
                  <div>
                    <img src={tech.url} alt={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </TabContent>

        <TabHeader for="tab3">
          <p>Mobile stack</p>
        </TabHeader>
        <TabContent name="tab3">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Mobile stack content</h2>
              <p>
                Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {FrontEndTechs.map((tech) => {
                return (
                  <div>
                    <img src={tech.url} alt={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </TabContent>

        <TabHeader for="tab4">
          <p>Mobile Platform</p>
        </TabHeader>
        <TabContent name="tab4">
          <section className="tech-tab">
            <div className="tech-tab__left-side">
              <h2 className="tab-header-title">Mobile platform</h2>
              <p>
                Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
              </p>
            </div>
            <div className="tech-tab__right-side">
              {FrontEndTechs.map((tech) => {
                return (
                  <div>
                    <img src={tech.url} alt={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </TabContent>
      </Tabs>
    )
  }
}

export default TabContainer;
