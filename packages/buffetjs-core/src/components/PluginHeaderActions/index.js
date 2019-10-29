/**
 *
 * PluginHeaderActions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import Wrapper from './Wrapper';

function PluginHeaderActions({ actions }) {
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

PluginHeaderActions.defaultProps = {
  actions: [],
};

PluginHeaderActions.propTypes = {
  actions: PropTypes.array,
};

export default PluginHeaderActions;
