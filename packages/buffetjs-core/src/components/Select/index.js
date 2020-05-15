/**
 *
 * Select
 *
 */

import React from 'react';
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
  const lengthOfReactElementsInOptions = options.filter(option =>
    React.isValidElement(option)
  ).length;

  const formatOptions = () =>
    options.map(option => {
      let optionValue = option;

      // Type check
      // Use option.value if it is defined (ie. even when it is an empty string)
      if (option && typeof option.value !== 'undefined') {
        optionValue = option.value;
      }

      return (
        <option key={JSON.stringify(optionValue)} value={optionValue}>
          {option.label || option}
        </option>
      );
    });
  const renderOptions = () => {
    const areOptionsValidReactElements = options.every(option =>
      React.isValidElement(option)
    );

    return areOptionsValidReactElements ? options : formatOptions();
  };

  if (lengthOfReactElementsInOptions > 0) {
    invariant(
      lengthOfReactElementsInOptions === options.length,
      'You have mixed up React Elements and non React Elements in your options array '
    );
  }

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
      {renderOptions()}
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
