/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';

import iconSearch from '../../../../assets/images/search.png';

import './index.sass';

const Search = ({
  value, onChange, onClear, onKeyPress,
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocusSearch = () => {
    setFocus(true);
  };

  const handleBlurSearch = () => {
    setFocus(false);
  };

  const handleClear = () => {
    onClear();
    setFocus(false);
  };

  return (
    <div
      className={`search-box${focus || value ? ' focus' : ''}`}
      tabIndex="0"
      onFocus={handleFocusSearch}
      onBlur={handleBlurSearch}
    >
      <img
        className="search-box__icon--search"
        src={iconSearch}
        alt="search-icon"
      />
      <input
        className="search-box__input"
        placeholder="Search"
        name="search"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <img
        onClick={handleClear}
        className="search-box__icon--close"
        src={iconSearch}
        alt="close-icon"
      />
    </div>
  );
};

export default Search;
