import React from 'react'

import './index.sass'
import map from '../../../../assets/images/map.svg'
import useMobileWidth from '../../../../utils/hooks/useMobileWidth'

const Success = () => {
  const isMobile = useMobileWidth()

  return (
    <section className="success">
      <div className="row success__main">
        <div className="col-12 col-md-6">
          <h1 className="success__main-title">
          Our achievement
          </h1>
        </div>
        <div className="col-12 col-md-6 success__main-description">
          <p>
          We pride ourselves on having clients’ satisfaction in the products we built. Our proven experience is deep from 30+ Mobile Applications and 45+ Website projects across 7 countries, including America, the United Kingdom, Malaysia, Australia, Thailand, Indonesia, Singapore, etc.
          </p>
        </div>
      </div>
      <div className="row success__sum">
        <div className="col-12 col-md-6">
          <h3>
            {isMobile ? 'Our company' : '30+ mobile application' }
          </h3>
          <p className="success__left-side success__paragraph">
          We have turned client’s idea into more than 30 mobile applications successfully. Each of them has different unique features from design to main business.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <h3>
          45+ websites
          </h3>
          <p className="success__paragraph">
          We also fulfilled at least 45 websites in many fields like ecommerce, management, etc. Some of them are used by big groups, companies and a large number of users.
          </p>
        </div>
        <div className="col-12 col-md-6" />
        <div className="col-12 col-md-6">
          <h3>
        7 countries
          </h3>
          <p className="success__paragraph">
          We are proud of being a well-known enterprise which can work together with clients coming from Singapore, UK, America, etc.
          </p>
          <img className="success__map" src={map} alt="map" />
        </div>
      </div>
    </section>
  )
}

export default Success
