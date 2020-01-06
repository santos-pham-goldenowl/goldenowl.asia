import React from 'react';
import './index.sass';
import coworker from '../../assets/images/coworker.png';
import discuss from '../../assets/images/discuss.png';
import conference from '../../assets/images/conference.png';

const Work = () => {
  return (
    <section className="work">
      <div className="work__top-container">
        <div className="work__one box">
          <img src={coworker} alt="co-worker" />
        </div>
        <div className="work__two box">
          <h2>Lorem ispum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, utamur viderer diceret pri ut. Cu purto quas atqui duo, mei vidit nemore detraxit id. Mea ne unum contentiones, ex vim labitur vocibus theophrastus. Rebum pericula ne mea.
          </p>
        </div>
        <div className="work__three box">
          <img src={discuss} alt="discuss" />
        </div>
        <div className="work__four box">
          <img src={conference} alt="conference" />
        </div>
        <div className="work__five box">
          <h2>Lorem ispum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, utamur viderer diceret pri ut. Cu purto quas atqui duo, mei vidit nemore detraxit id. Mea ne unum contentiones, ex vim labitur vocibus theophrastus. Rebum pericula ne mea.
          </p>
        </div>
        <div className="work__six box">
          <h2>
            How we work
          </h2>
          <p>
            Lorem ipsum dolor sit amet, utamur viderer diceret pri ut. Cu purto quas atqui duo, mei vidit nemore detraxit id. Mea ne unum contentiones, ex vim labitur vocibus theophrastus. Rebum pericula ne mea.
          </p>
        </div>
      </div>
      <div className="work__bottom-container">
        <div className="work__flex-item">
          <div>
            <h3>
              Lorem ispum lodor
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ex iusto officiis eos, id iisque luptatum antiopam vix, pro et hinc nominati. Pro illum ubique utroque id, congue dicunt invenire.
            </p>
          </div>
          <div>
            <h3>
              Lorem ispum lodor
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ex iusto officiis eos, id iisque luptatum antiopam vix, pro et hinc nominati. Pro illum ubique utroque id, congue dicunt invenire.
            </p>
          </div>
          <div>
            <h3>
              Lorem ispum lodor
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ex iusto officiis eos, id iisque luptatum antiopam vix, pro et hinc nominati. Pro illum ubique utroque id, congue dicunt invenire.
            </p>
          </div>
        </div>
        <div className="work__flex-item">
          <div className="work__flex-item-last">
            <h3>
              Lorem ispum lodor
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ex iusto officiis eos, id iisque luptatum antiopam vix, pro et hinc nominati. Pro illum ubique utroque id, congue dicunt invenire.
            </p>
          </div>
          <div className="work__flex-item-last">
            <h3>
              Lorem ispum lodor
            </h3>
            <p>
              Lorem ipsum dolor sit amet, ex iusto officiis eos, id iisque luptatum antiopam vix, pro et hinc nominati. Pro illum ubique utroque id, congue dicunt invenire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
