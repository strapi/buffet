import React, { Fragment, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/react-fontawesome';
import { faSearch, faEye, faClock } from '@fortawesome/free-solid-svg-icons';

import StyledIcon from '../../styled/Icon';

library.add(faSearch, faEye, faClock);

function Icon({ icon, className }) {
  if (typeof icon === 'string') {
    return <StyledIcon icon={icon} className={className || undefined} />;
  } if (isValidElement(icon)) {
    return <Fragment>{icon}</Fragment>;
  }
}

Icon.defaultProps = {
  className: null,
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Icon;
