import React from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import Home from '../../components/Home/index';
import web from '../../assets/images/web-development.svg';
import WebDevelopmentData from '../../utils/WebDevelopment';
import mobileSmall from '../../assets/images/mobile-small.svg';
import uiUXSmall from '../../assets/images/ui-ux-small.svg';
import projectMana from '../../assets/images/project-mana.svg';
import developmentTeam from '../../assets/images/development-team-small.svg';
import './index.sass';

const WebDevelopmentContainer = () => {
  return (
    <section className="web-development">
      <MainHeader />
      <SubHeader />
      <Home pageName="Services/Web Development" />
      <div className="web-development__top-content">
        <div className="web-development__single-padding">
          <h1>
            Lorem ipsum dolor sit ame
          </h1>
          <p className="web-development__introduction web-development__short-intro">
            Lorem ipsum dolor sit amet, choro feugait sit eu, his purto unum delenit et. Duo ei ridens interesset, no quo volumus dissentias. Vim iisque vidisse vivendum et. Vel ad perpetua consequat, has decore ridens vituperatoribus ut. Duo paulo essent ea.
          </p>
        </div>
        <div className="web-development__gray-bg">
          <img className="web-development__web-image" src={web} alt="web development" />
          <div className="web-development__single-padding web-development__gray-bg-text">
            <h2>
              Lorem ispum dolor
            </h2>
            <p className="web-development__introduction">
              Lorem ipsum dolor sit amet, utamur viderer diceret pri ut. Cu purto quas atqui duo, mei vidit nemore detraxit id. Mea ne unum contentiones, ex vim labitur vocibus theophrastus. Rebum pericula ne mea.
            </p>
            <p className="web-development__introduction">
              Affert deseruisse definitiones his at. Ex harum singulis convenire vis, vel justo labitur at, per incorrupte liberavisse an. Eam ex perfecto deserunt, duo debitis officiis in, eu
            </p>
          </div>
        </div>
      </div>
      <div className="web-development__logos-flex-container">
        <div className="web-development__images-wrapper">
          {WebDevelopmentData.map((image) => {
            return (
              <img src={image.url} alt={image.name} />
            );
          })}
        </div>
        <p>
          We have more than 50 developers who know the leading website platform like the back of their hand ensure guaranteed digital successs.
        </p>
      </div>
      <div className="web-development__paragraph-container">
        <div className="web-development__paragraph-flex-item">
          <h2>
            Lorem ispum dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="web-development__paragraph-flex-item">
          <h2>
            Lorem ispum
          dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="web-development__paragraph-flex-item">
          <h2>
            Lorem ispum
          dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="web-development__paragraph-flex-item">
          <h2>
            Lorem ispum
          dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="web-development__other-services-container">
          <h2 className="web-development__other-services-title">Other services</h2>
          <div>
            <div className="web-development__other-services-flex-container">
              <div className="web-development__other-services-flex-item">
                <img src={mobileSmall} alt="web" />
                <h3>Mobile development</h3>
              </div>
              <div className="web-development__other-services-flex-item">
                <img src={uiUXSmall} alt="ui-ux" />
                <h3>UX UI design</h3>
              </div>
            </div>
            <div className="web-development__other-services-flex-container">
              <div className="web-development__other-services-flex-item">
                <img src={projectMana} alt="project management" />
                <h3>Project management</h3>
              </div>
              <div className="web-development__other-services-flex-item">
                <img src={developmentTeam} alt="development team" />
                <h3>Development team</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default WebDevelopmentContainer;
