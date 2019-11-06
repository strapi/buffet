import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Header } from '@buffetjs/custom';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function HeaderStory() {
  const cta = {
    icon: 'fa fa-pencil',
    onClick: () => alert('Edit button clicked'),
  };

  const actions = [
    {
      title: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      color: 'cancel',
      type: 'button',
    },
    {
      title: 'Save',
      onClick: () => alert('Save button clicked'),
      color: 'success',
      type: 'submit',
    },
  ];

  const props = {
    title: {
      label: 'Restaurant',
      cta: cta,
    },
    content: 'Restaurant description',
    actions: actions,
  };

  return (
    <Presentation title="Header" description="Display data.">
      <div style={{ paddingTop: 9, marginBottom: 35 }}>
        <Header {...props} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { Header } from '@buffetjs/custom';

function Example() {
  const cta = {
    icon: 'fa fa-pencil',
    onClick: () => alert('Edit button clicked'),
  };

  const actions = [
    {
      title: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      color: 'cancel',
      type: 'button',
    },
    {
      title: 'Save',
      onClick: () => alert('Save button clicked'),
      color: 'success',
      type: 'submit',
    },
  ];

  const headerProps = {
    title: {
      label: 'Restaurant',
      cta: cta,
    },
    content: 'Restaurant description',
    actions: actions,
  };

  return (
    <Header {...headerProps} />
  );
}`;

storiesOf('Custom', module).add('Header', () => <HeaderStory />);
