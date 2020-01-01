import React, { Component } from 'react';
import './index.sass';

class SliderCarousel extends Component {
  state = {
    index: 0
  }

  previous = () => {
    if(this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  next = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  render() {
    const {images} = this.props;
    const {index} = this.state;
    return (
      <section className="carousel">
        <h2>
          We partner with the world's best
        </h2>
        <div className="carousel__images-container">
          <span className="carousel__arrow carousel__arrow-left" onClick={this.previous}></span>
          <div className="carousel__flex-container">
            {this.props.images.map((image, imageIndex) => {
              return <img className={index === imageIndex ? 'carousel__active' : ''} src={image.url} />
            })}
          </div>
          <span className="carousel__arrow carousel__arrow-right" onClick={this.next}></span>
        </div>
      </section>
    );
  }
}

export default SliderCarousel;
