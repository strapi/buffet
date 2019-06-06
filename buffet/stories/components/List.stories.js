import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import List from '../../src/components/List';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function ListStory() {
  const defaultProps = {
    items: [
      {
        firstname: 'Pierre',
        lastname: 'Gagnaire',
        description:
          'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
        restaurant: 'Le Gaya',
      },
      {
        firstname: 'Georges',
        lastname: 'Blanc',
        description: 'Tenderloin drumstick cupim cow.',
        restaurant: 'Le Georges Blanc',
      },
      {
        firstname: 'Mars',
        lastname: 'Veyrat',
        description: 'Pancetta pig buffalo bresaola.',
        restaurant: 'La Ferme de mon père',
      },
    ],
  };

  return (
    <Presentation title="List" description="Display some data.">
      <div style={{ paddingTop: 3, marginBottom: 35 }}>
        <List {...defaultProps} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { List } from 'buffetjs';

const rows = [
  {
    firstname: 'Pierre',
    lastname: 'Gagnaire',
    description:
      'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
    restaurant: 'Le Gaya',
  },
  {
    firstname: 'Georges',
    lastname: 'Blanc',
    description: 'Tenderloin drumstick cupim cow.',
    restaurant: 'Le Georges Blanc',
  },
  {
    firstname: 'Mars',
    lastname: 'Veyrat',
    description: 'Pancetta pig buffalo bresaola.',
    restaurant: 'La Ferme de mon père',
  },
];

function Example() {
  return (
    <List items={rows} />
  );
}
`;

storiesOf('Components', module).add('List', () => <ListStory />);
