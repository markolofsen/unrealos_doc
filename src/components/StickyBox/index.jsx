import * as React from 'react';
import PropTypes from 'prop-types';

// libs
// https://github.com/yahoo/react-stickynode
import Sticky from 'react-stickynode';
import { isBrowser } from 'react-device-detect';

function StickyBox(props) {

  const handleStateChange = (status) => {
    // if(status.status === Sticky.STATUS_FIXED) {
    //   console.log('the component is sticky');
    // }
  };

  return (
    <Sticky
      enabled={isBrowser}
      top={props.top}
      bottomBoundary={props.bottomBoundary}
      onStateChange={handleStateChange}>
      {props.children}
    </Sticky>
  )
}

StickyBox.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.number,
  bottomBoundary: PropTypes.any,
}

StickyBox.defaultProps = {
  top: undefined,
  bottomBoundary: undefined,
}

export default StickyBox
