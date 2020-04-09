import React from 'react'
import { Link } from 'react-router-dom'

import home from 'assets/images/home-icon.png'
import './index.sass'
import ReadingProgress from 'components/ReadingProgress'

const FixedTopBreadCrumb = (props) => (
  <section id="fixed-top-breadcrumb" className="fixed-breadcrumb fixed-top d-none">
    <div className="fixed-breadcrumb__content">
      <Link to="/">
        <div>
          <img src={home} alt="home" loading="lazy" />
          {props.children && <span>/</span>}
        </div>
      </Link>
      <div className="fixed-breadcrumb__text">{props.children}</div>
    </div>
    <ReadingProgress target={props.pageContent} />
  </section>
)

export default FixedTopBreadCrumb
