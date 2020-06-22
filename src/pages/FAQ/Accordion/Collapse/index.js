import React, {useEffect,useState}from 'react';
import PropTypes from 'prop-types';
//import  {TransitionGroup} from 'react-transition-group';


import { useAccordionContext } from '../hooks';
import "../../index.sass";
const Collapse = ({
  element: Component,
  eventKey,
  children,
  ...otherProps
}) => {
  const { activeEventKey } = useAccordionContext();
 // const [showing, sethowing] = useState(false);
  return activeEventKey === eventKey ? (
    <Component {...otherProps}>
   {children}
   </Component>
  ) : null;
};

Collapse.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Collapse.defaultProps = {
  element: 'div'
};  

export default Collapse;