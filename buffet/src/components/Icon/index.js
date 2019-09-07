import React, { Fragment, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import IconWrapper from '../../styled/Icon/IconWrapper';
import StyledIcon from '../../styled/Icon';

const iconMap = new Map([
  ['time', faClock],
  ['password', faEye],
  ['search', faSearch],
]);

function Icon({ icon, className, background }) {
  if (iconMap.has(icon)) {
    return (
      <IconWrapper background={background}>
        <StyledIcon
          icon={iconMap.get(icon)}
          className={className || undefined}
        />
      </IconWrapper>
    );
  }
  if (isValidElement(icon)) {
    return <Fragment>{icon}</Fragment>;
  }

  return null;
}

Icon.defaultProps = {
  className: null,
  icon: 'search',
  background: null,
};

Icon.propTypes = {
  background: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Icon;
