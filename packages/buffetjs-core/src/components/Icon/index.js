import React from 'react';
import PropTypes from 'prop-types';
import {
  faSearch,
  faEye,
  faAngleLeft,
  faAngleRight,
  faPencilAlt,
  faSortDown,
  faSortUp,
  faTrashAlt,
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
  ['trash', faTrashAlt],
  ['plus', faPlus],
]);

function Icon({ icon, className }) {
  if (iconMap.has(icon)) {
    return (
      <StyledIcon icon={iconMap.get(icon)} className={className || undefined} />
    );
  }

  return icon || null;
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
