import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import List from '../../src/components/List';

function ListStory() {
  const defaultProps = {
    name: 'time',
    title: '4 Modèles sont disponibles',
    hasEditBtn: true,
    schema: {
      icon: null,
      name: 'nom',
      description: 'description',
      fields: 'fields',
    },
    list: [
      {
        icon: 'fa-cube',
        name: 'article njfkeqzjfkebzqjkfbejzkbfjkezbfjkezbjkebfjz',
        description: 'content type description',
        fields: 2,
      },
      {
        icon: 'fa-cube',
        name: 'users',
        description: 'content type description',
        fields: 2,
        source: 'users-permissions',
      },
      {
        icon: 'fa-cube',
        name: 'permissions',
        description: 'content type description',
        fields: 1,
        source: 'users-permissions',
      },
    ],
  };

  return <List {...defaultProps} />;
}

storiesOf('Components|List', module).add('CTB List', () => <ListStory />);
