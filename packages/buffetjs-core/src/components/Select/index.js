/**
 *
 * Select
 *
 */

import React, { isValidElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import { Select as StyledSelect } from '@buffetjs/styles';

function Select({
  autoFocus,
  id,
  name,
  onChange,
  options,
  tabIndex,
  value,
  ...rest
}) {
  const renderedOptions = useMemo(() => {
    const { length: reactElementsInOptionsLength } = options.filter(
      isValidElement
    );
    const areOptionsValidReactElements =
      reactElementsInOptionsLength === options.length;

    if (reactElementsInOptionsLength > 0) {
      invariant(
        areOptionsValidReactElements,
        'You have mixed up React Elements and non React Elements in your options array '
      );
    }

    return areOptionsValidReactElements
      ? options
      : options.map(option => (
        <option
          key={JSON.stringify(option.value) || option}
          value={option.value || option}
        >
          {option.label || option}
        </option>
      ));
  }, [options]);

  return (
    <StyledSelect
      autoFocus={autoFocus}
      id={id || name}
      name={name}
      onChange={onChange}
      tabIndex={tabIndex}
      value={value}
      {...rest}
    >
      {renderedOptions}
    </StyledSelect>
  );
}

Select.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  id: null,
  options: [],
  placeholder: null,
  tabIndex: '0',
};

Select.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.object,
        ]),
      }),
      PropTypes.string,
      PropTypes.node,
    ])
  ),
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default Select;
