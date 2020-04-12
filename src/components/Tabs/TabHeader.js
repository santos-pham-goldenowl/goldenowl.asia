import React from 'react';

class TabHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return { active: nextProps.selected === nextProps.for };
  }

  onClick = () => {
    const { for: foz, onSelect } = this.props;

    if (onSelect) {
      onSelect(foz);
    }
  }

  render() {
    const { active } = this.state;
    const { children } = this.props;

    return (
      <div className={`header header-active-${active}`} onClick={this.onClick}>
        {children}
      </div>
    );
  }
}

export default TabHeader;
