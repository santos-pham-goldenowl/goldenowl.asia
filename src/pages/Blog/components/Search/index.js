/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';

import iconSearch from '../../../../assets/images/search.png';
import iconClose from '../../../../assets/images/close.svg';

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
        autoComplete="off"
        className="search-box__input"
        placeholder="Search"
        name="search"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {value && (
        <img
          onClick={handleClear}
          className="search-box__icon--close"
          src={iconClose}
          alt="close-icon"
        />
      )}
    </div>
  );
};

export default Search;
