import React from 'react';
import PropTypes from 'prop-types';

const TabContent = (props) => {
  return (
    <div className="tab-content-container">{props.children}</div>
  );
};

TabContent.propTypes = {
  name: PropTypes.string.isRequired
}

export default TabContent;
