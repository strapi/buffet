import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Header } from '@buffetjs/custom';
import { InputText } from '@buffetjs/core';
import styled from 'styled-components';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Wrapper = styled.div`
  padding-top: 10px;
`;

function SimpleHeaderStory() {
  return (
    <Presentation title="Header" description="Simple Header">
      <Wrapper>
        <Header
          title={{ label: 'restaurant de Paris' }}
          content="Restaurant description"
        />
      </Wrapper>
      <Pre>{defaultHeaderSource}</Pre>
    </Presentation>
  );
}

function ActionsHeaderStory() {
  return (
    <Presentation title="Header" description="Header with actions">
      <Wrapper>
        <Header
          actions={[
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
          ]}
          title={{
            label: 'restaurant de Paris',
            cta: {
              icon: 'fa fa-pencil',
              onClick: () => alert('Edit button clicked'),
            },
          }}
          content="Restaurant description"
        />
        <Pre>{headerActionsSource}</Pre>
      </Wrapper>
    </Presentation>
  );
}

function LoadingHeaderStory() {
  return (
    <Presentation title="Header" description="Header in loading state">
      <Wrapper>
        <Header
          title={{
            label: 'restaurant de Paris',
          }}
          content="Restaurant description"
          isLoading
        />
        <Pre>{loadingHeaderSource}</Pre>
      </Wrapper>
    </Presentation>
  );
}

function CustomHeaderStory() {
  return (
    <Presentation title="Header" description="Header with custom components">
      <Wrapper>
        <Header
          actions={[
            {
              Component: InputText,
              name: 'example',
              key: 'example',
              placeholder: 'Custom component',
            },
          ]}
          title={{
            label: 'restaurant de Paris',
          }}
          content="Restaurant description"
        />
        <Pre>{customHeaderSource}</Pre>
      </Wrapper>
    </Presentation>
  );
}

const customHeaderSource = `
import React from 'react';
import { Header } from '@buffetjs/custom';
import { InputText } from '@buffetjs/core';
function Example() {
  return (
    <Header
    actions={[
      {
        Component: InputText,
        name: 'example',
        key: 'example',
        placeholder: 'Custom component',
      },
    ]}
    title={{
      label: 'restaurant de Paris',
    }}
    content="Restaurant description"
  );
}
`;

const defaultHeaderSource = `
import React from 'react';
import { Header } from '@buffetjs/custom';
function Example() {
  return (
    <Header
      title={{ label: 'restaurant de Paris' }}
      content="Restaurant description"
  );
}
`;

const headerActionsSource = `
import React from 'react';
import { Header } from '@buffetjs/custom';
function Example() {
  return (
    <Header
      actions={[
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
      ]}
      title={{
        label: 'restaurant de Paris',
        cta: {
          icon: 'fa fa-pencil',
          onClick: () => alert('Edit button clicked'),
        },
      }}
      content="Restaurant description"
  );
}
`;

const loadingHeaderSource = `
import React from 'react';
import { Header } from '@buffetjs/custom';
function Example() {
  return (
    <Header
      title={{ label: 'restaurant de paris' }}
      content="Restaurant description"
      isLoading
  );
}
`;

storiesOf('Custom|Header', module)
  .add('Simple', () => <SimpleHeaderStory />)
  .add('Loading', () => <LoadingHeaderStory />)
  .add('With Actions', () => <ActionsHeaderStory />)
  .add('Custom', () => <CustomHeaderStory />);
