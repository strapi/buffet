import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import List from '../../src/components/List';
import Presentation from '../ui/Presentation';

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

  return (
    <Presentation
      title="List"
      description="Checkout the Story to see how it works."
    >
      <List {...defaultProps} />
    </Presentation>
  );
}

const source = `
import { List } from 'buffetjs';

function Example() {
  const listProps = {
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

  return (
    <>
      <List {...listProps} />
    </>
  );
}
`;

storiesOf('Components|List', module)
  .addDecorator(withStorySource(source))
  .add('Default', () => <ListStory />);
