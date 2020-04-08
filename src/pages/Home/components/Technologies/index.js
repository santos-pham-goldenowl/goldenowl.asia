import React from 'react'

import technologiesLogo from 'utils/technologiesLogo'
import useMobileWidth from 'utils/hooks/useMobileWidth'

import './index.sass'
import { Link } from 'react-router-dom'

const Technologies = () => {
  const isMobile = useMobileWidth()

  return (
    <section className="technologies">
      <h3 className="technologies__title heading-base">Technologies we use</h3>
      <div className="row">
        {technologiesLogo.map((logo, index) => (
          <div key={logo.name} className={`col-6 col-md-2 logo-wrapper${(isMobile && index > 7) ? ' d-none' : ' d-flex'}`}>
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
}

export default Technologies
