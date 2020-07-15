/**
 *
 * Checkbox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as StyledCheckbox, CheckboxWrapper } from '@buffetjs/styles';
import Label from '../Label';

function Checkbox({
  autoFocus,
  className,
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
    <CheckboxWrapper className={className} disabled={rest.disabled}>
      <StyledCheckbox
        {...rest}
        autoFocus={autoFocus}
        id={id || name}
        name={name}
        onChange={handleChange}
        tabIndex={tabIndex}
        checked={value}
      />
      <Label htmlFor={id || name} message={message} />
    </CheckboxWrapper>
  );
}

Checkbox.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  className: null,
  disabled: false,
  id: null,
  message: null,
  onChange: () => {},
  placeholder: null,
  tabIndex: '0',
  value: false,
};
Checkbox.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.bool,
};

export default Checkbox;
