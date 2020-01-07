import React from 'react';

class TabContent extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default TabContent;
