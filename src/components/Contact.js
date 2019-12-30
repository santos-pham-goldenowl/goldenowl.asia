import React, {Component} from 'react';
import '../styles/Contact.sass';

class Contact extends Component {
  render() {
    return(
      <section className='contact'>
        <h3>Get in touch via email</h3>
        <p className='contact__email'>admin@goldenowl.asia</p>
        <p className='contact__phone'>
          Or give our friendly team a quick call on (+84) 912 878985
        </p>
      </section>
    );
  }
}
export default Contact;
