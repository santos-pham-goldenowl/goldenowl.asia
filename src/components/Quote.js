import React, { Component } from 'react';
import '../styles/Home.sass';

class Quote extends Component {
  render() {
    return(
      <section className='quote'>
        <div className="quote__left-side">
          <h1 className="quote__content">
            “If you deprive yourself of offshore development and your competitors do not, you are putting yourself out of business”
          </h1>
          <div class="quote__author">
            <strong className="quote__text-bold">Lee Kuan Yew - </strong>
            <span>the first Prime Minister of Singapore.</span>
          </div>
        </div>
        <div className="quote__right-side">
          <img src="https://miro.medium.com/max/10636/1*KhvhVYWnCIG_8Rho8D2XTg@2x.jpeg" alt="work" />
        </div>
      </section>
    );
  }
}

export default Quote;
