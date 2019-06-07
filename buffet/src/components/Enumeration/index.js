/**
 *
 * Enumeration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
  controlledPropTypes,
} from '../../commonPropTypes/input';

import Label from '../Label';
import StyledEnumeration, {
  EnumerationWrapper,
} from '../../styled/Enumeration';

function Enumeration({ id, name, onChange, options, value }) {
  return (
    <EnumerationWrapper>
      {options.map(option => (
        <Label key={option.value} htmlFor={id || name}>
          <StyledEnumeration
            checked={option.value === value}
            name={id || name}
            onChange={onChange}
            value={option.value}
          />
          <span>{option.label}</span>
        </Label>
      ))}
    </EnumerationWrapper>
  );
}

Enumeration.defaultProps = {
  ...commonDefaultProps,
  onChange: () => {},
  options: null,
  value: null,
};

Enumeration.propTypes = {
  ...commonPropTypes,
  ...controlledPropTypes,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.string,
};

export default Enumeration;
