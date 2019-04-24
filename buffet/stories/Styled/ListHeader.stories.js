import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import ListHeader from '../../src/styled/ListHeader';
import Button from '../../src/styled/Button';
import ListTitle from '../../src/styled/ListTitle';
import ListSubtitle from '../../src/styled/ListSubtitle';

storiesOf('Styled|ListHeader', module).add('Simple', () => (
  <ListHeader>
    <Button icon="add" color="secondary">
      New
    </Button>
    <ListTitle>4 Modèles sont disponibles</ListTitle>
    <ListSubtitle>
      Configurez les options par défault de vos modèles
    </ListSubtitle>
  </ListHeader>
));
