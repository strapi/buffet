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
      id,
      name,
      type: 'checkbox',
      value: !value,
    };

    onChange({ target });
  };

  return (
    <StyledToggleWrapper>
      <Label htmlFor={id || name}>
        <StyledToggle value={value} name={id || name} onChange={handleChange} />
        <span>OFF</span>
        <span>ON</span>
      </Label>
    </StyledToggleWrapper>
  );
}

Toggle.defaultProps = {
  ...commonDefaultProps,
  value: false,
};
Toggle.propTypes = {
  ...commonPropTypes,
  name: PropTypes.string,
  value: PropTypes.bool,
};

export default Toggle;
