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
  const handleChange = () => {
    const target = {
      name,
      type: 'checkbox',
      value: !value,
    };

    onChange({ target });
  };

  return (
    <StyledToggleWrapper>
      <Label htmlFor={id || name}>
        <StyledToggle
          value={value}
          id={id || name}
          name={id || name}
          onChange={handleChange}
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
