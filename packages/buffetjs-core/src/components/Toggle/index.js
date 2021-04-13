/**
 *
 * Toggle
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Toggle as StyledToggle, ToggleWrapper } from '@buffetjs/styles';
import Label from '../Label';

function Toggle({ disabled, id, className, name, onChange, value, labelLeft, labelRight }) {
  const isIndeterminate = value === null;

  const handleRef = useCallback(
    element => {
      if (element) {
        element.indeterminate = isIndeterminate; // eslint-disable-line no-param-reassign
      }
    },
    [isIndeterminate]
  );

  const handleChange = e => {
    let targetValue = e.target.checked;
    // Handle click when the state is inteterminate
    if (isIndeterminate) {
      // Select the right value depending on the mouse position
      targetValue = e.nativeEvent.offsetX >= e.target.offsetWidth / 2;
    }
    onChange({ target: { name, value: targetValue } });
  };

  return (
    <ToggleWrapper className={className}>
      <Label htmlFor={id || name}>
        <StyledToggle
          disabled={disabled}
          checked={value || false}
          id={id || name}
          name={id || name}
          onChange={handleChange}
          ref={handleRef}
        />
        <span>{labelLeft}</span>
        <span>{labelRight}</span>
      </Label>
    </ToggleWrapper>
  );
}

Toggle.defaultProps = {
  className: null,
  disabled: false,
  id: null,
  onChange: () => {},
  value: false,
  labelLeft: "OFF",
  labelRight: "ON"
};

Toggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
};

export default Toggle;
