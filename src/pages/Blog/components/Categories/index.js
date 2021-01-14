import React from 'react';

import arrowDown from '../../../../assets/images/chevron-down-solid.svg';

import './index.sass';
import './categories.sass';

const Categories = ({ listCategory, currentCategory, onChange }) => {
  const formatNameCategory = (name) => name[0].toUpperCase() + name.substr(1);
  return (
    <header className="sub-header-category">
      <div className="dropdown">
        <div className="align-items-center sub-header__button">
          <div
            className="d-flex align-items-center no-hover-text-decoration no-outline"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex="0"
            onMouseOver={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.add('dropdown-open')}
            onMouseLeave={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.remove('dropdown-open')}
            onFocus={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.add('dropdown-open')}
            onBlur={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.remove('dropdown-open')}
          >
            <h4 className="sub-header__text">
              {currentCategory === 'all'
                ? formatNameCategory('All categories')
                : formatNameCategory(listCategory[currentCategory].name)}
            </h4>
            <img className="arrow-down" src={arrowDown} alt="arrow-down" />
          </div>
          <div
            className="categories-dropdown-top-block"
            onMouseOver={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.add('dropdown-open')}
            onMouseLeave={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.remove('dropdown-open')}
            onFocus={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.add('dropdown-open')}
            onBlur={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.remove('dropdown-open')}
          />
        </div>
        <div id="categories-dropdown" className="dropdown-content">
          <div
            className="categories__items"
            onMouseOver={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.add('dropdown-open')}
            onMouseLeave={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.remove('dropdown-open')}
            onFocus={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.add('dropdown-open')}
            onBlur={() => document.getElementById('categories-dropdown')
              && document
                .getElementById('categories-dropdown')
                .classList.remove('dropdown-open')}
          >
            <div key="all" onClick={() => onChange('all')}>
              <div className="categories__category">
                <div className="categories__category-description-wrapper">
                  <p>{formatNameCategory('All categories')}</p>
                </div>
              </div>
            </div>
            {Object.values(listCategory).map((category) => (
              <div key={category.id} onClick={() => onChange(category.id)}>
                <div className="categories__category">
                  <div className="categories__category-description-wrapper">
                    <p>{formatNameCategory(category.name)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Categories;
