/**
 *
 * Toggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';

import Label from '../Label';

import StyledToggle, { ToggleWrapper } from '../../styled/Toggle';

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
  ...commonDefaultProps,
  onChange: () => {},
  value: false,
};

Toggle.propTypes = {
  ...commonPropTypes,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export default Toggle;
