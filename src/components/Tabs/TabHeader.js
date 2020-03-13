import React from 'react'
import PropTypes from 'prop-types'

class TabHeader extends React.Component {
  static propTypes = { for: PropTypes.string.isRequired }

  state = { active: false }

  static getDerivedStateFromProps(nextProps) {
    return { active: nextProps.selected === nextProps.for }
  }

  onClick = (e) => {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.for)
    }
  }

  render() {
    return (
      <div className={`header header-active-${this.state.active}`} onClick={this.onClick}>{this.props.children}
      </div>
    )
  }
}

export default TabHeader
