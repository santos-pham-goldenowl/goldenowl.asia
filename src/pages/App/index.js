import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../Home'
import HomeClone from '../HomeClone'
import About from '../About'
import TechnologyContainer from '../Technology'
import Services from '../Services'
import singleServiceDetails from '../../utils/SingleServiceDetails'
import portfolioDetails from '../../utils/portfolioDetails'
import objectToArray from '../../utils/objectToArray'
import SingleService from '../SingleService'
import Testimonials from '../Testimonials'
import Portfolio from '../Portfolio'
import PortfolioSubPage from '../PortfolioSubPage'
import Blog from '../Blog'
import Contact from '../Contact'
import ScrollToTop from '../../components/ScrollToTop'

import './index.sass'

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <section id="app" className="App">
      <Route exact path="/home" component={HomeClone} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/technologies" component={TechnologyContainer} />
      <Route exact path="/testimonial" component={Testimonials} />
      <Route exact path="/portfolio" component={Portfolio} />
      {
        objectToArray(portfolioDetails).map((portfolio) => (
          <Route
            exact
            key={portfolio.key}
            path={`/portfolio/${portfolio.url}`}
            component={() => <PortfolioSubPage content={portfolio} />}
          />
        ))
      }
      <Route path="/blog" component={Blog} />
      <Route path="/contact-us" component={Contact} />
      <Route exact path="/services" component={Services} />
      {
        objectToArray(singleServiceDetails).map((service) => (
          <Route
            exact
            key={service.key}
            path={`/services/${service.url}`}
            component={() => <SingleService content={service} />}
          />
        ))
      }
    </section>
  </BrowserRouter>
)

export default App
