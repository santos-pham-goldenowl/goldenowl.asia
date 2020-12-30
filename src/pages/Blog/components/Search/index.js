import React, { Component } from 'react';

import iconSearch from '../../../../assets/images/search.png';
import './index.sass';

class Search extends Component {
  render() {
    return (
      <div className="search__box">
        <div className="search__icon-wrapper">
          <img className="icon-search" src={iconSearch} alt="search-icon" />
        </div>
        <div className="search__text">
          <p>Search</p>
        </div>
      </div>
    );
  }
}

export default Search;
