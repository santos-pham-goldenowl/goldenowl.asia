import React from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Home from '../../components/Home/index';
import Footer from '../../components/Footer/index';
import mobileSmall from '../../assets/images/service_logos/OtherServices/mobile-small.svg';
import uiUXSmall from '../../assets/images/service_logos/OtherServices/ui-ux-small.svg';
import projectMana from '../../assets/images/service_logos/OtherServices/project-mana.svg';
import developmentTeam from '../../assets/images/service_logos/OtherServices/development-team-small.svg';
import './index.sass';

const Service = (props) => {
  return (
    <section className="service">
      <MainHeader />
      <SubHeader />
      <Home pageName={props.pageName} />
      <div className="service__top-content">
        <div className="service__single-padding">
          <h1 className="service__title">
            Lorem ipsum dolor sit ame
          </h1>
          <p className="service__introduction service__short-intro">
            Lorem ipsum dolor sit amet, choro feugait sit eu, his purto unum delenit et. Duo ei ridens interesset, no quo volumus dissentias. Vim iisque vidisse vivendum et. Vel ad perpetua consequat, has decore ridens vituperatoribus ut. Duo paulo essent ea.
          </p>
        </div>
        <div className="service__gray-bg">
          <img className="service__web-image" src={props.coverImage} alt="web development" />
          <div className="service__single-padding service__gray-bg-text">
            <h2>
              Lorem ispum dolor
            </h2>
            <p className="service__introduction">
              Lorem ipsum dolor sit amet, utamur viderer diceret pri ut. Cu purto quas atqui duo, mei vidit nemore detraxit id. Mea ne unum contentiones, ex vim labitur vocibus theophrastus. Rebum pericula ne mea.
            </p>
            <p className="service__introduction">
              Affert deseruisse definitiones his at. Ex harum singulis convenire vis, vel justo labitur at, per incorrupte liberavisse an. Eam ex perfecto deserunt, duo debitis officiis in, eu
            </p>
          </div>
        </div>
      </div>
      <div className="service__logos-flex-container">
        <div className="service__images-wrapper">
          {props.serviceData.map((image) => {
            return (
              <img src={image.url} alt={image.name} />
            );
          })}
        </div>
        <p>
          We have more than 50 developers who know the leading website platform like the back of their hand ensure guaranteed digital successs.
        </p>
      </div>
      <div className="service__paragraph-container">
        <div className="service__paragraph-flex-item">
          <h2>
            Lorem ispum dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="service__paragraph-flex-item">
          <h2>
            Lorem ispum
          dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="service__paragraph-flex-item">
          <h2>
            Lorem ispum
          dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="service__paragraph-flex-item">
          <h2>
            Lorem ispum
          dolor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div className="service__other-services-container">
          <h2 className="service__other-services-title">Other services</h2>
          <div className="service__grid">
            {props.otherServiceImages.map((image) => {
              return (
                <div className="service__grid-item">
                  <img src={image.url} />
                  <h3>{image.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Service;
