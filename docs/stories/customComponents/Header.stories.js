import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Header } from '@buffetjs/custom';
// import { InputText } from '@buffetjs/core';
import styled from 'styled-components';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Wrapper = styled.div`
  padding-top: 9px;
  margin-bottom: 35px;

  .input-wrapper {
    margin-left: 1.8rem;
    height: 30px;
    > input {
      height: 30px;
    }
  }
`;

function HeaderStory() {
  const cta = {
    icon: 'fa fa-pencil',
    onClick: () => alert('Edit button clicked'),
  };

  const actions = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      color: 'cancel',
      type: 'button',
    },
    {
      label: 'Save',
      onClick: () => alert('Save button clicked'),
      color: 'success',
      type: 'submit',
    },
    // // Passing custom component
    // {
    //   Component: InputText,
    //   className: 'input-wrapper',
    //   name: 'example',
    //   key: 'example',
    // },
  ];

  const props = {
    title: {
      label: 'restaurant de paris',
      cta: cta,
    },
    content: 'Restaurant description',
    actions: actions,
  };

  return (
    <Presentation title="Header" description="Display data.">
      <Wrapper>
        <Header {...props} />
      </Wrapper>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { Header } from '@buffetjs/custom';
import { InputText } from '@buffetjs/core';
import styled from 'styled-components';

const Wrapper = styled.div\`
  padding-top: 9px;
  margin-bottom: 35px;

  .input-wrapper {
    margin-left: 1.8rem;
    height: 30px;
    > input {
      height: 30px;
    }
  }
\`;

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
    // Passing custom component
    {
      Component: InputText,
      className: 'input-wrapper',
      name: 'example',
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
    <Wrapper>
      <Header {...headerProps} />
    </Wrapper>
  );
}`;

storiesOf('Custom', module).add('Header', () => <HeaderStory />);
