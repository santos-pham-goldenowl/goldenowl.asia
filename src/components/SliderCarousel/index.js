import React, { Component } from 'react';
import './index.sass';

class SliderCarousel extends Component {
  state = {
    index: 0
  }

  goToPreviousSlide = () => {
    this.setState({
      index: (this.state.index + this.props.images.length - 1) % this.props.images.length
    })
  }

  goToNextSlide = () => {
    this.setState({
      index: (this.state.index + 1) % this.props.images.length
    })
  }

  render() {
    const {index} = this.state;
    console.log('index', index);
    const images = this.props.images.slice(index, this.props.images.length).concat(this.props.images.slice(0, index));
    return (
      <section className="carousel">
        <h2>
          We partner with the world's best
        </h2>
        <div className="carousel__main-content">
          <span className="carousel__arrow carousel__arrow-left" onClick={this.goToPreviousSlide}></span>
          <div className="carousel__images-container">
            <div className="carousel__flex-container">
              {images.map((image) => {
                return (
                  <img src={image.url} />
                );
              })}
            </div>
          </div>
          <span className="carousel__arrow carousel__arrow-right" onClick={this.goToNextSlide}></span>
        </div>
      </section>
    );
  }
}

export default SliderCarousel;
