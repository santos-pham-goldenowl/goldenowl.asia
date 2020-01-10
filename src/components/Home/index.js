import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/home-icon.png';
import './index.sass';

const Home = (props) => {
  return (
    <section className="home-back">
      <div>
        <Link to="/">
          <div>
            <img src={home} alt="home" />
            <span>/</span>
          </div>
        </Link>
        <p className="home-back__text">{props.pageName}</p>
      </div>
    </section>
  );
}

export default Home;
