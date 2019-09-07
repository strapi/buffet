import React, { Fragment, isValidElement } from 'react';
import PropTypes from 'prop-types';
import {
  faSearch,
  faEye,
  faAngleLeft,
  faAngleRight,
  faSortDown,
  faSortUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import StyledIcon from '../../styled/Icon';

const iconMap = new Map([
  ['time', faClock],
  ['password', faEye],
  ['search', faSearch],
  ['left', faAngleLeft],
  ['right', faAngleRight],
  ['asc', faSortUp],
  ['desc', faSortDown],
  ['icon', faTrash],
]);

function Icon({ icon, className }) {
  if (iconMap.has(icon)) {
    return (
      <StyledIcon icon={iconMap.get(icon)} className={className || undefined} />
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
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Icon;
