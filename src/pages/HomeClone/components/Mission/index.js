import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../../../../assets/images/bg.svg'
import ArrowRight from '../../../../components/ArrowRight'

import './index.sass'

const Missions = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }
  return (
    <section className="missions-clone" style={sectionStyle}>
      <div className="row">
        <div className="col-12 col-md-5">
          <h3 className="missions-clone__title">What we do</h3>
          <p>
            Lorem ipsum dolor sit amet, natum persequeris vel cu. Nominavi
            temporibus ad sit. Pri nonumy laudem complectitur ea. Modus
            eloquentiam id has.
          </p>
        </div>
        <div className="col-12 col-md-7 pr-0 missions-clone__items-wrapper">
          <div className="row">
            <div className="col-6">
              <Link className="missions-clone__item" to="/services/web-development">
                <h3 className="missions-clone__item-title">Web development</h3>
                <ArrowRight className="missions-clone__arrow" />
              </Link>
              <Link className="missions-clone__item" to="/services/ux-ui-design">
                <h3 className="missions-clone__item-title">UX UI design</h3>
                <ArrowRight className="missions-clone__arrow" />
              </Link>
              <Link className="missions-clone__item" to="/services/development-team">
                <h3 className="missions-clone__item-title">Development team</h3>
                <ArrowRight className="missions-clone__arrow" />
              </Link>
            </div>
            <div className="col-6">
              <Link
                className="missions-clone__item"
                to="/services/mobile-development"
              >
                <h3 className="missions-clone__item-title">Mobile development</h3>
                <ArrowRight className="missions-clone__arrow" />
              </Link>
              <Link
                className="missions-clone__item"
                to="/services/project-management"
              >
                <h3 className="missions-clone__item-title">Project management</h3>
                <ArrowRight className="missions-clone__arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Missions
