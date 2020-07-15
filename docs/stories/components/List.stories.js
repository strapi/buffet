import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { List } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function ListStory() {
  const defaultProps = {
    items: [
      {
        firstname: 'Pierre',
        lastname: 'Gagnaire',
        description:
          'Food qualities braise chicken cuts bowl through slices butternut snack.',
        restaurant: 'Le Gaya',
      },
      {
        firstname: 'Georges',
        lastname: 'Blanc',
        description: 'Flavor centerpiece plate.',
        restaurant: 'Le Georges Blanc',
      },
      {
        firstname: 'Marc',
        lastname: 'Veyrat',
        description: 'Gastronomy atmosphere set aside.',
        restaurant: 'La Ferme de mon père',
      },
    ],
  };

  return (
    <Presentation title="List" description="Display data.">
      <div style={{ paddingTop: 8, marginBottom: 35 }}>
        <List {...defaultProps} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { List } from '@buffetjs/core';

const rows = [
  {
    firstname: 'Pierre',
    lastname: 'Gagnaire',
    description:
      'Food qualities braise chicken cuts bowl through slices butternut snack.',
    restaurant: 'Le Gaya',
  },
  {
    firstname: 'Georges',
    lastname: 'Blanc',
    description: 'Flavor centerpiece plate.',
    restaurant: 'Le Georges Blanc',
  },
  {
    firstname: 'Mars',
    lastname: 'Veyrat',
    description: 'Gastronomy atmosphere set aside.',
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
