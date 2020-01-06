import React from 'react';
import working from '../../assets/images/working.png';
import './index.sass';

const IntroductionDetail = () => {
  return (
    <section className="introduction-detail">
      <div className="introduction-detail__left-side">
        <h2>
          We are golden owl
        </h2>
        <p className="introduction-detail__text">
          Lorem ipsum dolor sit amet, utamur viderer diceret pri ut. Cu purto quas atqui duo, mei vidit nemore detraxit id. Mea ne unum contentiones, ex vim labitur vocibus theophrastus. Rebum pericula ne mea.
        </p>
        <p className="introduction-detail__text">
          Affert deseruisse definitiones his at. Ex harum singulis convenire vis, vel justo labitur at, per incorrupte liberavisse an. Eam ex perfecto deserunt, duo debitis officiis in, eu sea verear minimum. Legere audire utroque ei usu. Nostrud percipitur an usu, ex tation nostro probatus mel, duo alia nulla homero id. Nobis omittantur sea te, his ut wisi utinam mandamus.
        </p>
      </div>
      <div className="introduction-detail__right-side">
        <img src={working} alt="working" />
      </div>
    </section>
  );
}

export default IntroductionDetail;
