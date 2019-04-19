import React from 'react';
import { text, object } from '@storybook/addon-knobs';

import List from '../../../src/combined/List';

const CombinedList = () => {
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
  const list = object('List', [
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
    list,
  };

  return <List {...initProps} />;
};

export default CombinedList;
