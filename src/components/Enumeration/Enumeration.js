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

import StyledEnumerationWrapper from './StyledEnumerationWrapper';
import StyledEnumeration from './StyledEnumeration';

function Enumeration({ id, name, onChange, options, value }) {
  const handleChange = event => {
    const target = {
      id,
      name,
      type: 'radio',
      value: event.target.value,
    };
    onChange({ target });
  };

  return (
    <StyledEnumerationWrapper>
      {options.map(option => (
        <StyledEnumeration
          key={option}
          checked={option === value}
          name={name}
          onChange={handleChange}
          value={option}
        />
      ))}
    </StyledEnumerationWrapper>
  );
}

Enumeration.defaultProps = {
  ...commonDefaultProps,
  name: null,
  options: null,
  value: null,
};

Enumeration.propTypes = {
  ...commonPropTypes,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
};

export default Enumeration;
