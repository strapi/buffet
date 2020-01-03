/**
 *
 * HeaderActions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HeaderActions as Wrapper } from '@buffetjs/styles';

import Button from '../Button';

function HeaderActions({ actions }) {
  return (
    <Wrapper>
      {actions.map((action, index) => {
        const { Component, disabled, label, onClick } = action;

        if (Component) {
          return <Component {...action} key={action.key || index} />;
        }

        return (
          <Button
            key={label}
            onClick={onClick}
            disabled={disabled || false}
            {...action}
          >
            {label}
          </Button>
        );
      })}
    </Wrapper>
  );
}

HeaderActions.defaultProps = {
  actions: [],
};

HeaderActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      title: PropTypes.string,
    })
  ),
};

export default HeaderActions;
