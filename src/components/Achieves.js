import React, { Component } from 'react';
import '../styles/Achieves.sass';

class Achieves extends Component {
  render() {
    return(
      <section className='achieves'>
        <p>Worldwide Cutomer’s base: Singapore, Australia, UK, Hong Kong, the US and more…
        </p>
        <div className='achieves__main-content'>
          <div className='achieves__item-flex'>
            <h1>129</h1>
            <p>Number of succesful project</p>
          </div>
          <div className='achieves__item-flex'>
            <h1>7+</h1>
            <p>Countries</p>
          </div>
          <div className='achieves__item-flex'>
            <h1>60+</h1>
            <p>Team member</p>
          </div>
          <div className='achieves__item-flex'>
            <h1>4+</h1>
            <p>Year in the market</p>
          </div>
          <div className='achieves__item-flex'>
            <h1>30+</h1>
            <p>Mobile app</p>
          </div>
          <div className='achieves__item-flex'>
            <h1>45+</h1>
            <p>Website</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Achieves;
