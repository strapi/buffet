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
        const { title } = action;

        return (
          <Button key={title.props.id ? title.props.id : title} {...action}>
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
  actions: PropTypes.array,
};

export default HeaderActions;
