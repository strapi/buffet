/**
 *
 * Toggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Toggle as StyledToggle, ToggleWrapper } from '@buffetjs/styles';
import Label from '../Label';

function Toggle({ disabled, id, className, name, onChange, value }) {
  return (
    <ToggleWrapper className={className}>
      <Label htmlFor={id || name}>
        <StyledToggle
          disabled={disabled}
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
  className: null,
  disabled: false,
  id: null,
  onChange: () => {},
  value: false,
};

Toggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export default Toggle;
