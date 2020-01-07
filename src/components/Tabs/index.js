import React from 'react';
import TabContent from './TabContent';
import TabHeader from './TabHeader';
import Tabs from './Tabs';
import './index.sass';
import FrontEndTechs from '../../utils/FrontendTechs';

const TabContainer = () => {
  return (
    <Tabs>
      <TabHeader for='tab1'>
        <p>Frontend</p>
      </TabHeader>
      <TabContent name='tab1'>
        <section className="frontend-tab">
          <div className="frontend-tab__left-side">
            <h2 className="tab-header-title">Lorem ispum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
            </p>
          </div>
          <div className="frontend-tab__right-side">
            {FrontEndTechs.map((tech) => {
              return (
                <div>
                  <img src={tech.url} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              )
            })}
          </div>
        </section>
      </TabContent>

      <TabHeader for='tab2'>
        <p>Backend</p>
      </TabHeader>
      <TabContent name='tab2'>
        <p>Back end content</p>
      </TabContent>

      <TabHeader for='tab3'>
        <p>Mobile stack</p>
      </TabHeader>
      <TabContent name='tab3'>
        <p>Mobile stack content</p>
      </TabContent>

      <TabHeader for='tab4'>
        <p>Mobile Platform</p>
      </TabHeader>
      <TabContent name='tab4'>
        <p>Mobile Platform content</p>
      </TabContent>
    </Tabs>
  );
}

export default TabContainer;
