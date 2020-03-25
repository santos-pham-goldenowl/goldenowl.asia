import React from 'react'

import technologiesLogo from '../../../../utils/TechnologiesLogo'
import './index.sass'
import { Link } from 'react-router-dom'

const Technologies = () => (
  <section className="technologies">
    <h3 className="technologies__title heading-base">Technologies we use</h3>
    <div className="row">
      {technologiesLogo.map((logo) => (
        <div key={logo.name} className="col-md-2 d-flex">
          <img
            className="technologies__grid-item"
            src={logo.url}
            alt={logo.name}
          />
        </div>
      ))}
    </div>
    <Link to="/technologies">
      <span className="technologies__view-all">View all technologies</span>
    </Link>
  </section>
)

export default Technologies
