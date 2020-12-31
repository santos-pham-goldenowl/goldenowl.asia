import React from 'react';

import arrowDown from '../../../../assets/images/chevron-down-solid.svg';
import categories from '../../../../utils/blogCategories';

import './index.sass';
import './categories.sass';

const Categories = () => (
  <header id="sub-header" className="sub-header">
    <div className="dropdown">
      <div className="align-items-center sub-header__button">
        <div
          className="d-flex align-items-center no-hover-text-decoration"
          onMouseOver={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.add('dropdown-open')}
          onMouseLeave={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.remove('dropdown-open')}
          onFocus={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.add('dropdown-open')}
          onBlur={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.remove('dropdown-open')}
        >
          <h4 className="sub-header__text">All categories</h4>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
        <div
          className="categories-dropdown-top-block"
          onMouseOver={() => document.getElementById('categories-dropdown')
                  && document.getElementById('categories-dropdown').classList.add('dropdown-open')}
          onMouseLeave={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.remove('dropdown-open')}
          onFocus={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.add('dropdown-open')}
          onBlur={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.remove('dropdown-open')}
        />
      </div>
      <div id="categories-dropdown" className="dropdown-content">
        <div
          className="categories__items"
          onMouseOver={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.add('dropdown-open')}
          onMouseLeave={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.remove('dropdown-open')}
          onFocus={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.add('dropdown-open')}
          onBlur={() => document.getElementById('categories-dropdown')
                && document.getElementById('categories-dropdown').classList.remove('dropdown-open')}
        >
          {categories.map((category) => (
            <div key={category.name}>
              <div className="categories__category">
                <div className="categories__category-description-wrapper">
                  <p>{category.name}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  </header>
);

export default Categories;
