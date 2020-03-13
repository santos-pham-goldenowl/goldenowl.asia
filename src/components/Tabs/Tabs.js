import React from 'react'

import TabHeader from './TabHeader'
import TabContent from './TabContent'

class Tabs extends React.Component {
  state = { selected: '' };

  toogleTab(name) {
    this.setState({ selected: name })
  }

  render() {
    const { children } = this.props
    let { selected } = this.state

    selected = selected || children.filter((c) => c.type === TabHeader)[0].props.for

    const tabHeaders = children.filter((c) => c.type === TabHeader).map((c) => (
      React.cloneElement(c, { onSelect: this.toogleTab.bind(this), selected })
    ))

    const tabContents = children.filter((c) => c.type === TabContent).filter((c) => (
      c.props.name === selected
    ))

    return (
      <div>
        <div className="header-group">
          {tabHeaders}
        </div>
        <div className="content">
          {tabContents}
        </div>
      </div>
    )
  }
}

export default Tabs
