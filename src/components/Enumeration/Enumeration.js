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
} from '../../commonPropTypes/input';

import Label from '../Label';
import StyledEnumerationWrapper from './StyledEnumerationWrapper';
import StyledEnumeration from './StyledEnumeration';

function Enumeration({ id, name, onChange, options, value }) {
  const handleChange = event => {
    const target = {
      name,
      type: 'radio',
      value: event.target.value,
    };
    onChange({ target });
  };

  return (
    <StyledEnumerationWrapper>
      {options.map(option => (
        <Label key={option.value} htmlFor={id || name}>
          <StyledEnumeration
            checked={option.value === value}
            name={id || name}
            onChange={handleChange}
            value={option.value}
          />
          <span>{option.label}</span>
        </Label>
      ))}
    </StyledEnumerationWrapper>
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.string,
};

export default Enumeration;
