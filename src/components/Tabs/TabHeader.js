import React from 'react';

class TabHeader extends React.Component {

  state = {
    headerActive: false
  }

  onClick() {
    if(this.props.onSelect) {
      this.props.onSelect(this.props.for);
      this.setState({
        headerActive: true
      })
    } else {
      this.setState({
        headerActive: false
      })
    }
  }

  render() {
    return (
      <div className={`header header-active-${this.state.headerActive}`} onClick={this.onClick.bind(this)}>{this.props.children}
      </div>
    );
  }
}

export default TabHeader;
