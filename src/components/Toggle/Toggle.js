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
import StyledToggleWrapper from './StyledToggleWrapper';
import StyledToggle from './StyledToggle';

function Toggle({ id, name, onChange, value }) {
  return (
    <StyledToggleWrapper>
      <Label htmlFor={id || name}>
        <StyledToggle
          value={value}
          id={id || name}
          name={id || name}
          onChange={e => {
            onChange({ target: { name, value: e.target.checked } });
          }}
        />
        <span>OFF</span>
        <span>ON</span>
      </Label>
    </StyledToggleWrapper>
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
