import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';

const stories = storiesOf('Button|Button', module);

// Primary
stories.add('Button|ButtonPrimary', () => (
  <Button type="primary" label="Save" />
));
stories.add('Button|ButtonPrimaryIcon', () => (
  <Button type="primary" icon="add" label="Save" />
));

// Secondary
stories.add('Button|ButtonSecondary', () => (
  <Button type="secondary" label="Text" />
));
stories.add('Button|ButtonSecondaryIcon+', () => (
  <Button type="secondary" icon="add" label="Add" />
));
stories.add('Button|ButtonSecondaryIcon<', () => (
  <Button type="secondary" icon="back" label="Back" />
));

// Cancel
stories.add('Button|ButtonCancel', () => (
  <Button type="cancel" label="Cancel" />
));

// Outline
stories.add('Button|ButtonOutline', () => (
  <Button type="outline" label="Text" />
));
stories.add('Button|ButtonOutline+', () => (
  <Button type="outline" icon="add" label="Text" />
));

// Danger
stories.add('Button|ButtonDanger', () => (
  <Button type="danger" label="Danger" />
));
stories.add('Button|ButtonDelete', () => (
  <Button type="delete" icon="trash" label="Delete" />
));
