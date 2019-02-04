import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';

const stories = storiesOf('Button|Button', module);

// Primary
stories.add('Button|ButtonPrimary', () => (
  <Button type="submit" color="primary" label="Save" />
));
stories.add('Button|ButtonPrimaryIcon', () => (
  <Button type="submit" color="primary" icon="add" label="Save" />
));

// Secondary
stories.add('Button|ButtonSecondary', () => (
  <Button type="submit" color="secondary" label="Text" />
));
stories.add('Button|ButtonSecondaryIcon+', () => (
  <Button type="submit" color="secondary" icon="add" label="Add" />
));
stories.add('Button|ButtonSecondaryIcon<', () => (
  <Button type="submit" color="secondary" icon="back" label="Back" />
));

// Cancel
stories.add('Button|ButtonCancel', () => (
  <Button type="submit" color="cancel" label="Cancel" />
));

// Delete
stories.add('Button|ButtonDelete', () => (
  <Button type="submit" color="delete" icon="trash" label="Delete" />
));
