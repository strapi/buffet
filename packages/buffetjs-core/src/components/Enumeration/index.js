/**
 *
 * Enumeration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Enumeration as StyledEnumeration,
  EnumerationWrapper,
} from '@buffetjs/styles';

import Label from '../Label';

function Enumeration({ id, className, name, onChange, options, value }) {
  return (
    <EnumerationWrapper className={className}>
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
  className: null,
  id: null,
  onChange: () => {},
  options: [],
  value: null,
};

Enumeration.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  value: PropTypes.string,
};

export default Enumeration;
