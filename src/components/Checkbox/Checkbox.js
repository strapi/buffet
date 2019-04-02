/**
 *
 * Checkbox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';
import StyledCheckboxWrapper from './StyledCheckboxWrapper';
import StyledCheckbox from './StyledCheckbox';
import Label from '../Label';

function Checkbox({
  autoFocus,
  id,
  message,
  name,
  onChange,
  tabIndex,
  value,
  ...rest
}) {
  const handleChange = () => {
    const target = {
      name,
      type: 'checkbox',
      value: !value,
    };

    onChange({ target });
  };

  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox
        autoFocus={autoFocus}
        id={id || name}
        name={name}
        onChange={handleChange}
        tabIndex={tabIndex}
        value={value}
        {...rest}
      />
      <Label htmlFor={id || name} message={message} />
    </StyledCheckboxWrapper>
  );
}

Checkbox.defaultProps = {
  ...commonDefaultProps,
  onChange: () => {},
  value: false,
  message: null,
};
Checkbox.propTypes = {
  ...commonPropTypes,
  message: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
};

export default Checkbox;
