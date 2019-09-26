/**
 *
 * Toggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Toggle as StyledToggle, ToggleWrapper } from '@buffetjs/styles';
import Label from '../Label';

function Toggle({ id, className, name, onChange, value }) {
  return (
    <ToggleWrapper className={className}>
      <Label htmlFor={id || name}>
        <StyledToggle
          checked={value}
          id={id || name}
          name={id || name}
          onChange={e => {
            onChange({ target: { name, value: e.target.checked } });
          }}
        />
        <span>OFF</span>
        <span>ON</span>
      </Label>
    </ToggleWrapper>
  );
}

Toggle.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  id: null,
  options: [],
  placeholder: null,
  tabIndex: '0',
  onChange: () => {},
  value: false,
};

Toggle.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,

  value: PropTypes.bool,
};

export default Toggle;
