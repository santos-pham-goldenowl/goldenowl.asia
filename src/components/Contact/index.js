import React from 'react'
import './index.sass'

import useMobileWidth from '../../utils/hooks/useMobileWidth';

const Contact = () => {
  const isMobile = useMobileWidth()
  return (
  <section className="contact">
    <h3>Get in touch via email</h3>
    <h3 className="text-xl contact__email">admin@goldenowl.asia</h3>
      {
      isMobile 
      ? <p className="contact__phone">Or give our friendly team a quick call on <br /> (+84) 912 878985</p>
      : <p className="contact__phone">Or give our friendly team a quick call on (+84) 912 878985</p>
      }
  </section>
)}

export default Contact
