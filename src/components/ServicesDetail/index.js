import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailContent from '../../utils/ServicesDetail';
import './index.sass';

const ServicesDetail = () => (
  <section className="services-detail">
    <div className="services-detail__main-content">
      <div className="services-detail__top-content">
        {ServicesDetailContent.topContent.map((c) => (
          <Link className="services-detail__flex-item" to={`/services/${c.link}`}>
            <img src={c.url} alt={c.title} />
            <h5 className="heading-x-small">{c.title}</h5>
            <p className="text-lg">{c.content}</p>
          </Link>
        ))}
      </div>
      <div className="services-detail__bottom-content">
        {ServicesDetailContent.bottomContent.map((c) => (
          <Link className="services-detail__flex-item" to={`/services/${c.link}`}>
            <img src={c.url} alt={c.title} />
            <h5 className="heading-x-small">{c.title}</h5>
            <p className="text-lg">{c.content}</p>
          </Link>
        ))}
      </div>
    </div>

    <div className="services-detail__paragraphs">
      <div className="flex-one">
        <h4 className="heading-small">
          From a basic idea to the
        masterpiece of work
        </h4>
        <p className="text-lg">
          We not only shape your idea into a immaculate product but also make it beyond your expectation. Our product will always meet your demand and never let you down.
        </p>
      </div>
      <div className="flex-one">
        <h4 className="heading-small">
          Not only about quality but about
        design as well
        </h4>
        <p className="text-lg">
          Besides paying attention to the quality and stability of the project, we also cherish the importance of design because the success of project is not only about how smooth it works, how unique the business is, it also about how elegant it looks. We always try our best to bring you the most modern and attractive design to the product.
        </p>
      </div>
    </div>

  </section>
);

export default ServicesDetail;
