import React, { useState } from 'react';

import iconSearch from '../../../../assets/images/search.png';
import './index.sass';

const Search = () => {
  const [toggled, setToggle] = useState(false);
  console.log('🚀 ~ file: index.js ~ line 8 ~ Search ~ toggled', toggled);
  return (
    <div className="search__box">
      {/* <div className="search__icon-wrapper">
        <img className="icon-search" src={iconSearch} alt="search-icon" />
      </div>
      <div className="search__text">
        <p>Search</p>
      </div> */}
      <img className="icon-search" src={iconSearch} alt="search-icon" placeholder="" />
      <input onBlur={() => setToggle(false)} onFocus={() => setToggle(true)} className="search-box-blog" />
    </div>
  );
};

export default Search;
