import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { text, object } from '@storybook/addon-knobs';

import List from '../../../src/combined/List';

function CombinedList() {
  const onClick = () => {
    console.log('New Model'); // eslint-disable-line no-console
  };
  const title = text('Title', '4 Modèles sont disponibles');
  const button = object('Button', {
    color: 'secondary',
    icon: 'add',
    label: 'New',
    onClick,
    type: 'submit',
  });
  const items = object('Items', [
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
  ]);

  const initProps = {
    title,
    button,
    items,
  };

  return <List {...initProps} />;
}

export default CombinedList;
