import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Icon from '../../src/styled/Icon';

storiesOf('Styled|Icon', module)
  // Email
  .add('Email', () => <Icon type="email" />)
  // Search
  .add('Search', () => <Icon type="search" />)
  // Password
  .add('Password', () => <Icon type="password" />);
