import React from 'react';
import './index.sass';

function Feedback() {
  return (
    <section className="feedback">
      <h2>What our clients say</h2>
      <div className="feedback__main-content">
        <div className="feedback__flex-item">
          <p>
            “Lorem ipsum dolor sit amet, iudico oratio eos ex. Duo ludus invenire ex, eam te lucilius voluptatum inciderint. No quo”
          </p>
          <div className="feedback__client-wrapper">
            <img src="https://media.pitchfork.com/photos/5dcec0b34aba6d0009f18c79/2:1/w_790/Taylor-Swift.jpg" alt="study" />
            <p>Raja, IDEA BURN</p>
          </div>
        </div>
        <div className="feedback__flex-item">
          <p>
            “Lorem ipsum dolor sit amet, iudico oratio eos ex. Duo ludus invenire ex, eam te lucilius voluptatum inciderint. No quo”
          </p>
          <div className="feedback__client-wrapper ">
            <img src="https://media.pitchfork.com/photos/5dcec0b34aba6d0009f18c79/2:1/w_790/Taylor-Swift.jpg" alt="study" />
            <p>Raja, IDEA BURN</p>
          </div>
        </div>
        <div className="feedback__flex-item">
          <p>
            “Lorem ipsum dolor sit amet, iudico oratio eos ex. Duo ludus invenire ex, eam te lucilius voluptatum inciderint. No quo”
          </p>
          <div className="feedback__client-wrapper">
            <img src="https://media.pitchfork.com/photos/5dcec0b34aba6d0009f18c79/2:1/w_790/Taylor-Swift.jpg" alt="study" />
            <p>Raja, IDEA BURN</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
