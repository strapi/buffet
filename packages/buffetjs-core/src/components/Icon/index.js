import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import {
  faSearch,
  faEye,
  faAngleLeft,
  faAngleRight,
  faPencilAlt,
  faSortDown,
  faSortUp,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Icon as StyledIcon } from '@buffetjs/styles';

const iconMap = new Map([
  ['time', faClock],
  ['password', faEye],
  ['search', faSearch],
  ['left', faAngleLeft],
  ['right', faAngleRight],
  ['pencil', faPencilAlt],
  ['asc', faSortUp],
  ['desc', faSortDown],
  ['trash', faTrash],
  ['plus', faPlus],
]);

function Icon({ icon, className }) {
  if (iconMap.has(icon)) {
    return (
      <StyledIcon icon={iconMap.get(icon)} className={className || undefined} />
    );
  }
  if (isValidElement(icon)) {
    return <span className={className}>{icon}</span>;
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
