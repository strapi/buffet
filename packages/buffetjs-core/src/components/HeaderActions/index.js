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
        const { Component, disabled, title, onClick } = action;

        if (Component) {
          return <Component {...action} key={action.key || index} />;
        }

        return (
          <Button
            key={title}
            onClick={onClick}
            disabled={disabled || false}
            {...action}
          >
            {title}
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
