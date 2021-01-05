import React from 'react';

import iconSearch from '../../../../assets/images/search.png';

import './index.sass';

const Search = () => (
  <div className="search__box">
    <input className="search-box-blog" placeholder="Search" />
    <img className="icon-search" src={iconSearch} alt="search-icon" />
    <div className="tag-remove" />
  </div>
);

export default Search;
