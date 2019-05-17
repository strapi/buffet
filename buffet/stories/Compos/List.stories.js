import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import List from '../../src/components/List';

function ListStory() {
  const defaultProps = {
    items: [
      {
        firstname: 'John',
        name: 'Doe',
        description:
          'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
        fields: 2,
      },
      {
        firstname: 'John',
        name: 'Smith',
        description: 'Tenderloin drumstick cupim cow.',
        fields: 3,
      },
      {
        firstname: 'Will',
        name: 'Smith',
        description: 'Pancetta pig buffalo bresaola.',
        fields: 1,
      },
    ],
  };

  return <List {...defaultProps} />;
}

storiesOf('Components|List', module).add('Default', () => <ListStory />);
