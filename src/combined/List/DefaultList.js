/**
 *
 * List
 *
 */

import React from 'react';

import ListCard from '../../styled/ListCard';

import ListHeader from '../../components/ListHeader';
import ListCompo from '../../components/List';

function List() {
  const onClick = () => {
    console.log('New Model'); // eslint-disable-line no-console
  };

  const initProps = {
    title: '4 Modèles sont disponibles',
    button: {
      color: 'secondary',
      icon: 'add',
      label: 'New',
      onClick,
      type: 'submit',
    },
    list: [
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
    <ListCard>
      <ListHeader
        title={initProps.title}
        subtitle={initProps.subtitle}
        button={initProps.button}
      />
      <ListCompo list={initProps.list} />
    </ListCard>
  );
}

export default List;
