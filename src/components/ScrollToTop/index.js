import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = 'auto';
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
