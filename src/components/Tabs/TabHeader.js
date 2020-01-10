import React from 'react';

class TabHeader extends React.Component {

  onClick() {
    if(this.props.onSelect) {
      this.props.onSelect(this.props.for);
    }
  }

  render() {
    return (
      <div className="header" onClick={this.onClick.bind(this)}>{this.props.children}
      </div>
    );
  }
}

export default TabHeader;
