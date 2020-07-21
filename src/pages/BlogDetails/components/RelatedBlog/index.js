import React from 'react';
import { Link } from 'react-router-dom';

import readTimeCalculator from '../../../../utils/readTimeCalculator';

import './index.sass';

const RelatedBlog = ({ content }) => (
  <li className="col-12 col-md-4 d-flex flex-column">
    <Link to={`/blog/details/${content.attributes.slug}`}>
      <div className="related-blog-image" style={{ backgroundImage: `url(${content.attributes.image})` }} />
    </Link>
    <Link to={`/blog/details/${content.attributes.slug}`}>
      <h4 className="related-blog-title">{content.attributes.title}</h4>
    </Link>
    <p className="related-blog-readtime text-uppercase text-right mt-auto">
      {readTimeCalculator(content.attributes.content)}
    </p>
  </li>
);

export default RelatedBlog;
