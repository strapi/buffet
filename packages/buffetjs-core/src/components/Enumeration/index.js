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

function Enumeration({
  disabled,
  id,
  className,
  name,
  onChange,
  options,
  value,
}) {
  return (
    <EnumerationWrapper className={className}>
      {options.map(option => (
        <Label key={option.value} htmlFor={id || name}>
          <StyledEnumeration
            disabled={disabled}
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
  disabled: false,
  id: null,
  onChange: () => {},
  options: [],
  value: null,
};

Enumeration.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]),
};

export default Enumeration;
