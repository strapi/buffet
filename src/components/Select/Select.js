/**
 *
 * Select
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';
import SelectStyled from './SelectStyled';

export function Select({
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
    React.isValidElement(option),
  ).length;
  const formatOptions = () =>
    options.map(option => (
      <option
        key={JSON.stringify(option.value) || option}
        value={option.value || option}
      >
        {option.label || option}
      </option>
    ));
  const renderOptions = () => {
    const areOptionsValidReactElements = options.every(option =>
      React.isValidElement(option),
    );

    return areOptionsValidReactElements ? options : formatOptions();
  };

  if (lengthOfReactElementsInOptions > 0) {
    invariant(
      lengthOfReactElementsInOptions === options.length,
      'You have mixed up React Element and non React Elements in your options array ',
    );
  }

  return (
    <SelectStyled
      autoFocus={autoFocus}
      id={id || name}
      name={name}
      onChange={onChange}
      tabIndex={tabIndex}
      value={value}
      {...rest}
    >
      {renderOptions()}
    </SelectStyled>
  );
}

Select.defaultProps = {
  ...commonDefaultProps,
  options: [],
};

Select.propTypes = {
  ...commonPropTypes,
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
    ]),
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default memo(Select);
