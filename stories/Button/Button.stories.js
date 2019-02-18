import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';

storiesOf('Button|Button', module)
  // Primary
  .add('Button|ButtonPrimaryWithLabelAsChild', () => (
    <Button type="submit" color="primary">
      Save
    </Button>
  ))
  .add('Button|ButtonPrimary', () => (
    <Button type="submit" color="primary" label="Save" />
  ))
  .add('Button|ButtonPrimaryIcon', () => (
    <Button type="submit" color="primary" icon="add" label="Save" />
  ))

  // Secondary
  .add('Button|ButtonSecondary', () => (
    <Button type="submit" color="secondary" label="Text" />
  ))
  .add('Button|ButtonSecondaryIcon<', () => (
    <Button type="submit" color="secondary" icon="back" label="Back" />
  ))

  // Cancel
  .add('Button|ButtonCancel', () => (
    <Button type="submit" color="cancel" label="Cancel" />
  ))

  // Delete
  .add('Button|ButtonDelete', () => (
    <Button type="submit" color="delete" icon="trash" label="Delete" />
  ));
