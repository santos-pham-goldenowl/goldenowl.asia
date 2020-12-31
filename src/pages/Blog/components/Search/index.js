import React, { useState } from 'react';

import iconSearch from '../../../../assets/images/search.png';

import './index.sass';

const Search = () => {
  const [toggled, setToggle] = useState(false);
  console.log('🚀 ~ file: index.js ~ line 8 ~ Search ~ toggled', toggled);
  return (
    <div className="search__box">
      <input onBlur={() => setToggle(false)} onFocus={() => setToggle(true)} className="search-box-blog" placeholder="Search" />
      <img className="icon-search" src={iconSearch} alt="search-icon" />
      <div className="tag-remove" />
    </div>
  );
};

export default Search;
