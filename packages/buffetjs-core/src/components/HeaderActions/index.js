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
      {actions.map(action => {
        const { title, onClick } = action;

        return (
          <Button key={title} onClick={onClick} {...action}>
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
      onClick: PropTypes.func,
      title: PropTypes.string,
    })
  ),
};

export default HeaderActions;
