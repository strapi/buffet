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
  uncontrolledDefaultProps,
  uncontrolledPropTypes,
} from '../../commonPropTypes/input';

import StyledCheckbox, { CheckboxWrapper } from '../../styled/Checkbox';
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
    <CheckboxWrapper>
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
    </CheckboxWrapper>
  );
}

Checkbox.defaultProps = {
  ...commonDefaultProps,
  ...uncontrolledDefaultProps,
  value: false,
  message: null,
};
Checkbox.propTypes = {
  ...commonPropTypes,
  ...uncontrolledPropTypes,
  message: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  value: PropTypes.bool,
};

export default Checkbox;
