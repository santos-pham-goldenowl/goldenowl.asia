import React from 'react';
import './index.sass';
import ServicesDetailContent from '../../utils/ServicesDetail';

const ServicesDetail = () => {
  return (
    <section className="services-detail">
      <div className="services-detail__main-content">
        <div className="services-detail__top-content">
          {ServicesDetailContent.topContent.map((c) => (
            <div className="services-detail__flex-item">
              <img src={c.url} alt={c.title} />
              <h3>{c.title}</h3>
              <p>{c.content}</p>
            </div>
          ))}
        </div>
        <div className="services-detail__bottom-content">
          {ServicesDetailContent.bottomContent.map((c) => (
            <div className="services-detail__flex-item">
              <img src={c.url} alt={c.title} />
              <h3>{c.title}</h3>
              <p>{c.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="services-detail__paragraphs">
        <div>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
          <p>
            Eos simul legimus gubergren ea. Nam ne saepe mandamus volutpat, pro ad aperiam discere luptatum. Pri ex meis electram laboramus, possit aperiam ex qui. Eos quod vivendo gloriatur ad.
          </p>
        </div>
      </div>

    </section>
  );
}

export default ServicesDetail;
