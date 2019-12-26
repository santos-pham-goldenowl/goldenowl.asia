import React, { Component } from 'react';
import Quote from './Quote'
import Missions from './Missions'
class Home extends Component {
  render() {
    return(
      <section>
        <Quote />
        <Missions />
      </section>
    );
  }
}

export default Home;
