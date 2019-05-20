import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Button from '../../src/styled/Button';

storiesOf('Styled|Button', module)
  // Primary
  .add('Primary', () => (
    <Button type="submit" color="primary">
      Save
    </Button>
  ))
  .add('Primary|Add', () => (
    <Button type="submit" color="primary" icon>
      Add
    </Button>
  ))

  // Secondary
  .add('Secondary', () => (
    <Button type="submit" color="secondary">
      Text
    </Button>
  ))
  .add('Secondary|Back', () => (
    <Button type="submit" color="primary" icon>
      Back
    </Button>
  ))

  // Cancel
  .add('Cancel', () => (
    <Button type="submit" color="cancel">
      Cancel
    </Button>
  ))

  // Delete
  .add('Delete', () => (
    <Button type="submit" color="delete" icon>
      Delete
    </Button>
  ));
