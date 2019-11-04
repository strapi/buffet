import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Header, HeaderTitle, HeaderActions } from '@buffetjs/core';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function HeaderStory() {
  const cta = {
    icon: 'fa fa-pencil',
    onClick: () => alert('Edit button clicked'),
  };

  const actions = [
    {
      title: <span>Cancel</span>,
      onClick: () => alert('Cancel button clicked'),
      color: 'cancel',
      type: 'button',
    },
    {
      title: <span>Save</span>,
      onClick: () => alert('Save button clicked'),
      color: 'success',
      type: 'submit',
    },
  ];

  const defaultProps = {
    title: <HeaderTitle title="Restaurant" cta={cta} />,
    content: <p>Restaurant description</p>,
    callToAction: <HeaderActions actions={actions} />,
  };

  return (
    <Presentation title="Header" description="Display data.">
      <div style={{ paddingTop: 3, marginBottom: 35 }}>
        <Header {...defaultProps} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { Header } from '@buffetjs/core';

`;

storiesOf('Components', module).add('Header', () => <HeaderStory />);
