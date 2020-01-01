import React, { Component } from 'react';
import './index.sass';

class AutoCarousel extends Component {
  render() {
    return (
      <section className="auto-carousel">
        <h2>What our clients say</h2>
        <div className="auto-carousel__main-content">
          {this.props.content.map((feed) => {
            return (
              <div className="auto-carousel__flex-item">
                <p>{feed.content}</p>
                <div className="auto-carousel__client-wrapper">
                  <img src={feed.url} alt="study" />
                  <p>Raja, IDEA BURN</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="auto-carousel__items-wrapper">
          <span className="auto-carousel__active auto-carousel__circle" />
          <span className="auto-carousel__circle" />
          <span className="auto-carousel__circle" />
          <span className="auto-carousel__circle" />
        </div>
      </section>
    );
  }
}
export default AutoCarousel;
